---
title: "Event: explicitOriginalTarget Eigenschaft"
short-title: explicitOriginalTarget
slug: Web/API/Event/explicitOriginalTarget
l10n:
  sourceCommit: c20c12fab32381b983b4148d712fda227d34e2bd
---

{{APIRef("DOM")}}{{Non-standard_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`explicitOriginalTarget`**-Eigenschaft des {{domxref("Event")}}-Interfaces gibt das nicht-anonyme ursprüngliche Ziel des Ereignisses zurück.

Wenn das Ereignis aus einem anderen Grund als dem Überqueren einer anonymen Grenze umgeleitet wurde, wird dies auf das Ziel gesetzt, bevor die Umleitung erfolgt.

Zum Beispiel werden Mausereignisse auf ihren übergeordneten Knoten umgeleitet, wenn sie über Textknoten auftreten (siehe [Firefox-Fehler 185889](https://bugzil.la/185889)), und in diesem Fall zeigt [`currentTarget`](/de/docs/Web/API/Event/currentTarget) das übergeordnete Element, während diese Eigenschaft den Textknoten zeigt.

Diese Eigenschaft unterscheidet sich auch von [`originalTarget`](/de/docs/Web/API/Event/originalTarget) darin, dass sie niemals anonyme Inhalte enthalten wird.

## Wert

Gibt das {{domxref("EventTarget")}}-Objekt zurück oder null, wenn keines vorhanden ist.

## Beispiel

Diese Eigenschaft kann mit `<command>` verwendet werden, um die Ereignisdetails des ursprünglichen Objekts abzurufen, das den Befehl aufruft.

```js
function myCommand(ev) {
  alert(ev.explicitOriginalTarget.nodeName); // gibt 'menuitem' zurück
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

_Dies ist eine Mozilla-spezifische Eigenschaft und ist Teil keiner aktuellen Spezifikation. Es ist nicht geplant, sie zu einem Standard zu machen._

## Kompatibilität mit Browsern

{{Compat}}
