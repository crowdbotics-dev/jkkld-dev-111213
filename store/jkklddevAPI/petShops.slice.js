import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { apiService } from "./api"
export const api_v1_petshop_list = createAsyncThunk(
  "petShops/api_v1_petshop_list",
  async payload => {
    const response = await apiService.api_v1_petshop_list(payload)
    return response.data
  }
)
export const api_v1_petshop_create = createAsyncThunk(
  "petShops/api_v1_petshop_create",
  async payload => {
    const response = await apiService.api_v1_petshop_create(payload)
    return response.data
  }
)
export const api_v1_petshop_retrieve = createAsyncThunk(
  "petShops/api_v1_petshop_retrieve",
  async payload => {
    const response = await apiService.api_v1_petshop_retrieve(payload)
    return response.data
  }
)
export const api_v1_petshop_update = createAsyncThunk(
  "petShops/api_v1_petshop_update",
  async payload => {
    const response = await apiService.api_v1_petshop_update(payload)
    return response.data
  }
)
export const api_v1_petshop_partial_update = createAsyncThunk(
  "petShops/api_v1_petshop_partial_update",
  async payload => {
    const response = await apiService.api_v1_petshop_partial_update(payload)
    return response.data
  }
)
export const api_v1_petshop_destroy = createAsyncThunk(
  "petShops/api_v1_petshop_destroy",
  async payload => {
    const response = await apiService.api_v1_petshop_destroy(payload)
    return response.data
  }
)
const initialState = { entities: [], api: { loading: "idle", error: null } }
const petShopsSlice = createSlice({
  name: "petShops",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(api_v1_petshop_list.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petshop_list.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = action.payload
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_list.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_create.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petshop_create.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities.push(action.payload)
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_create.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_retrieve.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petshop_retrieve.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = [
            ...state.entities.filter(record => record.id !== action.payload.id),
            action.payload
          ]
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_retrieve.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petshop_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_partial_update.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petshop_partial_update.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.map(record =>
            record.id === action.payload.id ? action.payload : record
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_partial_update.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_destroy.pending, (state, action) => {
        if (state.api.loading === "idle") {
          state.api.loading = "pending"
        }
      })
      .addCase(api_v1_petshop_destroy.fulfilled, (state, action) => {
        if (state.api.loading === "pending") {
          state.entities = state.entities.filter(
            record => record.id !== action.meta.arg?.id
          )
          state.api.loading = "idle"
        }
      })
      .addCase(api_v1_petshop_destroy.rejected, (state, action) => {
        if (state.api.loading === "pending") {
          state.api.error = action.error
          state.api.loading = "idle"
        }
      })
  }
})
export default {
  api_v1_petshop_list,
  api_v1_petshop_create,
  api_v1_petshop_retrieve,
  api_v1_petshop_update,
  api_v1_petshop_partial_update,
  api_v1_petshop_destroy,
  slice: petShopsSlice
}
