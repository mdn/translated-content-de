---
title: "MouseEvent: mozInputSource-Eigenschaft"
short-title: mozInputSource
slug: Web/API/MouseEvent/mozInputSource
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}} {{ Non-standard_header() }}

Die schreibgeschützte **`MouseEvent.mozInputSource`**-Eigenschaft auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) liefert Informationen darüber, welcher Gerätetyp das Ereignis erzeugt hat. Damit können Sie beispielsweise bestimmen, ob ein Mausereignis von einer tatsächlichen Maus oder durch ein Touch-Ereignis erzeugt wurde (was die Genauigkeit beeinflussen könnte, mit der Sie die mit dem Ereignis verknüpften Koordinaten interpretieren).

## Wert

Die folgenden Werte sind möglich.

| Konstanter Name       | Wert | Beschreibung                                                                |
| --------------------- | ---- | --------------------------------------------------------------------------- |
| `MOZ_SOURCE_UNKNOWN`  | 0    | Das Eingabegerät ist unbekannt.                                             |
| `MOZ_SOURCE_MOUSE`    | 1    | Das Ereignis wurde von einer Maus (oder einem mausähnlichen Gerät) erzeugt. |
| `MOZ_SOURCE_PEN`      | 2    | Das Ereignis wurde von einem Stift auf einem Tablet erzeugt.                |
| `MOZ_SOURCE_ERASER`   | 3    | Das Ereignis wurde von einem Radierer auf einem Tablet erzeugt.             |
| `MOZ_SOURCE_CURSOR`   | 4    | Das Ereignis wurde von einem Cursor erzeugt.                                |
| `MOZ_SOURCE_TOUCH`    | 5    | Das Ereignis wurde auf einer Touchschnittstelle erzeugt.                    |
| `MOZ_SOURCE_KEYBOARD` | 6    | Das Ereignis wurde von einer Tastatur erzeugt.                              |

## Spezifikationen

Teil keiner Spezifikation.

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
