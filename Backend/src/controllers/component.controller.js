const connection = require('../connection');

const componentController = {
    updateMonitor: (req, res) => {
        try {
            const codMonitor = req.params.cod_monitor; // ID del monitor a actualizar
            const {
                cod_equipo,
                cod_tics_monitor,
                mar_monitor,
                mod_monitor,
                ser_monitor,
                tam_monitor,
                con_monitor,
                est_monitor,
                observacion,
                nom_usua
            } = req.body;

            // Consulta SQL para actualizar el monitor en la base de datos
            const sql = `
                UPDATE monitor SET 
                    cod_equipo = ?,
                    cod_tics_monitor = ?,
                    mar_monitor = ?,
                    mod_monitor = ?,
                    ser_monitor = ?,
                    tam_monitor = ?,
                    con_monitor = ?,
                    est_monitor = ?,
                    observacion = ?,
                    nom_usua = ?
                WHERE cod_monitor = ?
            `;

            const values = [
                cod_equipo,
                cod_tics_monitor,
                mar_monitor,
                mod_monitor,
                ser_monitor,
                tam_monitor,
                con_monitor,
                est_monitor,
                observacion,
                nom_usua,
                codMonitor
            ];

            // Ejecutar la consulta
            connection.query(sql, values, (error, result) => {
                if (error) {
                    console.error('Error al actualizar el monitor:', error);
                    return res.status(500).json({ success: false, message: 'Error al actualizar el monitor' });
                }
                return res.status(200).json({ success: true, message: 'Monitor actualizado exitosamente' });
            });
        } catch (error) {
            console.error('Error en el controlador al intentar actualizar el monitor:', error);
            res.status(500).json({ success: false, message: 'Error en el servidor al actualizar el monitor' });
        }
    },

    updateMouse: (req, res) => {
        try {
            const codMouse = req.params.cod_mouse; // ID del mouse a actualizar
            const {
                cod_equipo,
                cos_tics_mouse,
                mar_mouse,
                mod_mouse,
                ser_mouse,
                tip_mouse,
                pue_mouse,
                con_mouse,
                est_mouse,
                obs_mouse,
                nom_usua
            } = req.body;

            // Consulta SQL para actualizar el mouse en la base de datos
            const sql = `
                UPDATE mouse SET 
                    cod_equipo = ?,
                    cod_tics_mouse = ?,
                    mar_mouse = ?,
                    mod_mouse = ?,
                    ser_mouse = ?,
                    tip_mouse = ?,
                    pue_mouse = ?,
                    con_mouse = ?,
                    est_mouse = ?,
                    obs_mouse = ?,
                    nom_usua = ?
                WHERE cod_mouse = ?
            `;

            const values = [
                cod_equipo,
                cos_tics_mouse,
                mar_mouse,
                mod_mouse,
                ser_mouse,
                tip_mouse,
                pue_mouse,
                con_mouse,
                est_mouse,
                obs_mouse,
                nom_usua,
                codMouse
            ];

            // Ejecutar la consulta
            connection.query(sql, values, (error, result) => {
                if (error) {
                    console.error('Error al actualizar el mouse:', error);
                    return res.status(500).json({ success: false, message: 'Error al actualizar el m' });
                }
                return res.status(200).json({ success: true, message: 'Mouse actualizado exitosamente' });
            });
        } catch (error) {
            console.error('Error en el controlador al intentar actualizar el mouse:', error);
            res.status(500).json({ success: false, message: 'Error en el servidor al actualizar el mouse' });
        }
    },

    updateTeclado: (req, res) => {
        try {
            const codTeclado = req.params.cod_teclado;
            const {
                cod_equipo,
                cod_tics_teclado,
                mar_teclado,
                mod_teclado,
                ser_teclado,
                tip_teclado,
                pue_teclado,
                con_teclado,
                est_teclado,
                obs_teclado
            } = req.body;

            // Consulta SQL para actualizar el teclado en la base de datos
            const sql = `
                UPDATE teclado SET 
                    cod_equipo = ?,
                    cod_tics_teclado = ?,
                    mar_teclado = ?,
                    mod_teclado = ?,
                    ser_teclado = ?,
                    tip_teclado = ?,
                    pue_teclado = ?,
                    con_teclado = ?,
                    est_teclado = ?,
                    obs_teclado = ?
                WHERE cod_teclado = ?
            `;

            const values = [
                cod_equipo,
                cod_tics_teclado,
                mar_teclado,
                mod_teclado,
                ser_teclado,
                tip_teclado,
                pue_teclado,
                con_teclado,
                est_teclado,
                obs_teclado,
                codTeclado // Asegúrate de que `codTeclado` sea un valor correcto
            ];

            // Ejecutar la consulta
            connection.query(sql, values, (error, result) => {
                if (error) {
                    console.error('Error al actualizar el teclado:', error);
                    return res.status(500).json({ success: false, message: 'Error al actualizar el teclado' });
                }
                return res.status(200).json({ success: true, message: 'Teclado actualizado exitosamente' });
            });
        } catch (error) {
            console.error('Error en el controlador al intentar actualizar el teclado:', error);
            res.status(500).json({ success: false, message: 'Error en el servidor al actualizar el teclado' });
        }
    }

}

module.exports = componentController;