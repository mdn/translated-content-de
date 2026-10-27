---
title: "HTMLInputElement: search-Ereignis"
short-title: search
slug: Web/API/HTMLInputElement/search_event
l10n:
  sourceCommit: e1b44d1e4197102da109a563f343cf41ef06ca7c
---

{{APIRef("HTML DOM")}}{{non-standard_header}}

Das **`search`**-Ereignis wird ausgelöst, wenn über ein {{HTMLElement("input")}}-Element mit `type="search"` eine Suche gestartet wird.

Eine Suche kann auf verschiedene Arten gestartet werden, etwa durch Drücken von <kbd>Enter</kbd>, während das {{HTMLElement("input")}}-Element den Fokus hat. Ist das Attribut [`incremental`](/de/docs/Web/HTML/Reference/Elements/input#incremental) vorhanden, kann die Suche auch nach Ablauf einer vom User Agent festgelegten Zeitspanne seit dem letzten Tastendruck gestartet werden. Jeder weitere Tastendruck setzt diese Zeitspanne zurück, sodass das Auslösen des Ereignisses {{Glossary("debounce", "entprellt")}} wird.

Aktuelle Implementierungen von `<input type="search">` in User Agents bieten außerdem ein Steuerelement zum Leeren des Felds. Auch bei dessen Verwendung wird das `search`-Ereignis ausgelöst. In diesem Fall ist der `value` des {{HTMLElement("input")}}-Elements eine leere Zeichenfolge.

Dieses Ereignis kann nicht abgebrochen werden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("search", (event) => { })
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onsearch = (event) => { }
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

```js
// addEventListener version
const input = document.querySelector('input[type="search"]');

input.addEventListener("search", () => {
  console.log(`The term searched for was ${input.value}`);
});
```

```js
// onsearch version (but note that this replaces other event listeners
// added using onsearch, if any)
const input = document.querySelector('input[type="search"]');

input.onsearch = () => {
  console.log(`The term searched for was ${input.value}`);
};
```

## Spezifikationen

Dieses Ereignis ist nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}
