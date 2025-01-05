"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { FormControl, InputLabel, Select, MenuItem, Typography, Box } from "@mui/material";

export default function GastoMensualPage() {
  const router = useRouter();

  const [selectedMonth, setSelectedMonth] = useState("");

  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const month = event.target.value as string;
    setSelectedMonth(month);
    if (month) {
      router.push(`/mes/${month}`);
    }
  };

  return (
    <Box mt={4}>
      <Typography variant="h4" gutterBottom>
        Selecciona un mes
      </Typography>
      <FormControl variant="outlined" style={{ minWidth: 200 }}>
        <InputLabel id="month-select-label">Mes</InputLabel>
        <Select
          labelId="month-select-label"
          id="month-select"
          value={selectedMonth}
          onChange={handleMonthChange}
          label="Mes"
        >
          <MenuItem value="enero">Enero</MenuItem>
          <MenuItem value="febrero">Febrero</MenuItem>
          <MenuItem value="marzo">Marzo</MenuItem>
          <MenuItem value="abril">Abril</MenuItem>
          <MenuItem value="mayo">Mayo</MenuItem>
          <MenuItem value="junio">Junio</MenuItem>
          <MenuItem value="julio">Julio</MenuItem>
          <MenuItem value="agosto">Agosto</MenuItem>
          <MenuItem value="septiembre">Septiembre</MenuItem>
          <MenuItem value="octubre">Octubre</MenuItem>
          <MenuItem value="noviembre">Noviembre</MenuItem>
          <MenuItem value="diciembre">Diciembre</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
