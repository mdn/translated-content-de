---
title: "MouseEvent: mozInputSource-Eigenschaft"
short-title: mozInputSource
slug: Web/API/MouseEvent/mozInputSource
l10n:
  sourceCommit: d783c87acb536c6c142792d263f813c88808551b
---

{{APIRef("Pointer Events")}} {{ Non-standard_header() }}

Die schreibgeschützte **`MouseEvent.mozInputSource`**-Eigenschaft auf [`MouseEvent`](/de/docs/Web/API/MouseEvent) liefert Informationen über den Typ des Geräts, das das Ereignis ausgelöst hat. Dies ermöglicht es Ihnen beispielsweise festzustellen, ob ein Mausereignis von einer tatsächlichen Maus oder durch ein Touch-Ereignis erzeugt wurde (was die Genauigkeit beeinflussen könnte, mit der Sie die mit dem Ereignis verbundenen Koordinaten interpretieren).

## Wert

Die folgenden Werte sind möglich.

| Konstantenname        | Wert | Beschreibung                                                               |
| --------------------- | ---- | -------------------------------------------------------------------------- |
| `MOZ_SOURCE_UNKNOWN`  | 0    | Das Eingabegerät ist unbekannt.                                            |
| `MOZ_SOURCE_MOUSE`    | 1    | Das Ereignis wurde durch eine Maus (oder ein mausähnliches Gerät) erzeugt. |
| `MOZ_SOURCE_PEN`      | 2    | Das Ereignis wurde durch einen Stift auf einem Tablet erzeugt.             |
| `MOZ_SOURCE_ERASER`   | 3    | Das Ereignis wurde durch einen Radierer auf einem Tablet erzeugt.          |
| `MOZ_SOURCE_CURSOR`   | 4    | Das Ereignis wurde durch einen Cursor erzeugt.                             |
| `MOZ_SOURCE_TOUCH`    | 5    | Das Ereignis wurde auf einer Touch-Oberfläche erzeugt.                     |
| `MOZ_SOURCE_KEYBOARD` | 6    | Das Ereignis wurde durch eine Tastatur erzeugt.                            |

## Spezifikationen

Nicht Teil einer Spezifikation.

## Siehe auch

- [`MouseEvent`](/de/docs/Web/API/MouseEvent)
