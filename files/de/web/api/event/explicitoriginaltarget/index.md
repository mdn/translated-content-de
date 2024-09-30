---
title: "Event: explicitOriginalTarget-Eigenschaft"
short-title: explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`explicitOriginalTarget`**-Eigenschaft des [`Event`](/de/docs/Web/API/Event)-Interfaces gibt das nicht-anonyme ursprüngliche Ziel des Ereignisses zurück.

Wenn das Ereignis aus einem anderen Grund als einem anonymen Grenzübertritt umgeleitet wurde, wird hier das Ziel vor der Umleitung gesetzt.

Zum Beispiel werden Mausereignisse auf ihren übergeordneten Knoten umgeleitet, wenn sie über Textknoten auftreten (siehe [Firefox-Fehler 185889](https://bugzil.la/185889)), und in diesem Fall zeigt [`currentTarget`](/de/docs/Web/API/Event/currentTarget) den übergeordneten Knoten, während diese Eigenschaft den Textknoten anzeigt.

Diese Eigenschaft unterscheidet sich auch von [`originalTarget`](/de/docs/Web/API/Event/originalTarget), da sie niemals anonymen Inhalt enthalten wird.

## Wert

Gibt das [`EventTarget`](/de/docs/Web/API/EventTarget)-Objekt oder null zurück, wenn keines vorhanden ist.

## Beispiel

Diese Eigenschaft kann mit `<command>` verwendet werden, um die Ereignisdetails des ursprünglichen Objekts, das den Befehl aufruft, zu erhalten.

```js
function myCommand(ev) {
  alert(ev.explicitOriginalTarget.nodeName); // returns 'menuitem'
}
```

```xml
<xul:command id="my-cmd-anAction" oncommand="myCommand(event);"/>

<xul:menulist>
  <xul:menupopup>
    <xul:menuitem label="Get my element name!" command="my-cmd-anAction"/>
  </xul:menupopup>
</menulist>
```

## Spezifikationen

_Dies ist eine Mozilla-spezifische Eigenschaft und ist nicht Teil einer aktuellen Spezifikation. Sie ist nicht auf dem Weg, ein Standard zu werden._

## Browser-Kompatibilität

{{Compat}}
