---
title: "MouseEvent: mozInputSource-Eigenschaft"
short-title: mozInputSource
slug: Web/API/MouseEvent/mozInputSource
l10n:
  sourceCommit: ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{APIRef("UI Events")}} {{ Non-standard_header() }}

Die schreibgeschützte **`MouseEvent.mozInputSource`**-Eigenschaft auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) liefert Informationen über die Art des Geräts, das das Ereignis erzeugt hat. Dies ermöglicht es Ihnen beispielsweise festzustellen, ob ein Mausereignis tatsächlich von einer Maus oder durch ein Touch-Ereignis erzeugt wurde (was die Genauigkeit beeinflussen könnte, mit der Sie die Koordinaten des Ereignisses interpretieren).

## Wert

Die folgenden Werte sind möglich.

| Konstantenname        | Wert  | Beschreibung                                              |
| --------------------- | ----- | --------------------------------------------------------- |
| `MOZ_SOURCE_UNKNOWN`  | 0     | Das Eingabegerät ist unbekannt.                           |
| `MOZ_SOURCE_MOUSE`    | 1     | Das Ereignis wurde von einer Maus (oder einem ähnlichen Gerät) erzeugt. |
| `MOZ_SOURCE_PEN`      | 2     | Das Ereignis wurde von einem Stift auf einem Tablet erzeugt. |
| `MOZ_SOURCE_ERASER`   | 3     | Das Ereignis wurde von einem Radierer auf einem Tablet erzeugt. |
| `MOZ_SOURCE_CURSOR`   | 4     | Das Ereignis wurde von einem Cursor erzeugt.              |
| `MOZ_SOURCE_TOUCH`    | 5     | Das Ereignis wurde auf einer Touch-Oberfläche erzeugt.    |
| `MOZ_SOURCE_KEYBOARD` | 6     | Das Ereignis wurde von einer Tastatur erzeugt.            |

## Spezifikationen

Ist nicht Teil einer Spezifikation.

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
