---
title: "Element: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Element/ariaNotify
l10n:
  sourceCommit: 11e09e7c584658fbfbecd2f00ae66e546cd54cc0
---

{{ApiRef("DOM")}}{{SeeCompatTable}}{{non-standard_header}}

Die **`ariaNotify()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces gibt an, dass ein gegebener Textstring von einem {{Glossary("screen_reader", "Screenreader")}} angesagt werden soll, falls verfügbar und aktiviert.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Ein String, der den anzusagenden Text angibt.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ansage angibt. Mögliche Werte sind:
        - `normal`
          - : Die Ansage hat normale Priorität. Sie wird nach einer Ansage ausgesprochen, die ein Screenreader gerade macht.
        - `high`
          - : Die Ansage hat hohe Priorität. Sie wird sofort ausgesprochen und unterbricht dabei eine Ansage, die ein Screenreader gerade macht.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`** Methode kann verwendet werden, um eine Screenreader-Ansage programmgesteuert auszulösen. Diese Methode bietet ähnliche Funktionalität wie [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Regionen können nur Ansagen machen, nachdem Änderungen im DOM vorgenommen wurden, während eine `ariaNotify()` Ansage jederzeit gemacht werden kann.
- Bei Live-Regionen werden die aktualisierten Inhalte des geänderten DOM-Knotens vorgelesen, während der Inhalt einer `ariaNotify()` Ansage unabhängig vom DOM-Inhalt definiert werden kann.

Entwickler umgehen oft die Einschränkungen von Live-Regionen, indem sie versteckte DOM-Knoten verwenden, auf denen Live-Regionen gesetzt sind, deren Inhalte mit dem anzusagenden Inhalt aktualisiert werden. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Manche Screenreader lesen mehrere `ariaNotify()`-Ansagen der Reihe nach vor, aber dies kann nicht über alle Screenreader und Plattformen hinweg garantiert werden. Normalerweise wird nur die neueste Ansage ausgesprochen. Es ist zuverlässiger, mehrere Ansagen in einer zu kombinieren.

Zum Beispiel wären die folgenden Aufrufe:

```js
elemRef.ariaNotify("Hello there.");
elemRef.ariaNotify("The time is now 8 o'clock.");
```

besser kombiniert:

```js
elemRef.ariaNotify("Hello there. The time is now 8 o'clock.");
```

Ein `ariaNotify()`-Aufruf kann bei jedem Element im DOM ausgelöst werden, außer bei solchen, die der Browser als "nicht interessant" für die Barrierefreiheit ansieht und beim Aufbau des Accessibility-Baumes ignoriert. Welche Elemente ignoriert werden, variiert je nach Browser, aber die Liste umfasst im Allgemeinen Container-Elemente mit geringem oder keinem semantischen Wert, wie die {{htmlelement("html")}} und {{htmlelement("body")}} Elemente.

`ariaNotify()` Ansagen erfordern keine {{Glossary("transient_activation", "transiente Aktivierung")}}; Sie sollten darauf achten, Benutzer von Screenreadern nicht mit zu vielen Benachrichtigungen zu spammen, da dies ein schlechtes Benutzererlebnis erzeugen könnte.

### Ansageprioritäten

Eine `ariaNotify()` Ansage mit `priority: high` wird vor einer `ariaNotify()` Ansage mit `priority: normal` angekündigt.

`ariaNotify()` Ansagen sind in etwa gleichwertig mit ARIA Live-Region-Ansagen wie folgt:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Jedoch werden `aria-live` Ansagen über `ariaNotify()` Ansagen priorisiert.

### Sprachauswahl

Screenreader wählen eine geeignete Stimme, mit der `ariaNotify()` Ansagen vorgelesen werden (in Bezug auf Akzent, Aussprache usw.), basierend auf der im `lang`-Attribut des Elements angegebenen Sprache oder, falls das Element kein `lang`-Attribut hat, dem `lang`-Attribut, das auf seinem nächstliegenden Vorfahren gesetzt ist. Wenn im HTML kein `lang`-Attribut angegeben ist, wird die Standardsprache des Benutzeragenten verwendet.

### Integration der Berechtigungsrichtlinie

Die Nutzung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungsrichtlinie](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Insbesondere werden dort, wo eine definierte Richtlinie die Nutzung blockiert, alle mit `ariaNotify()` erstellten Ansagen stumm geschaltet (sie werden nicht gesendet).

## Beispiele

Für ein ausführlicheres Beispiel siehe das [Beispiel für eine barrierefreie Einkaufsliste](/de/docs/Web/API/Document/ariaNotify#accessible_shopping_list_example) auf der [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Seite. Das Beispiel würde genauso funktionieren, wenn Sie `ariaNotify()` auf einem Element-Referenz anstelle des `Document`-Objekts aufrufen.

### Grundlegende `ariaNotify()` Nutzung

Dieses Beispiel enthält einen {{htmlelement("button")}}, der beim Klicken eine Screenreader-Ansage auf sich selbst auslöst.

```html live-sample___basic-arianotify
<button>Press</button>
```

```css hidden live-sample___basic-arianotify
html,
body {
  height: 100%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

```js live-sample___basic-arianotify
document.querySelector("button").addEventListener("click", () => {
  document.querySelector("button").ariaNotify("You 'aint seen me, right?");
});
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

Versuchen Sie, einen Screenreader zu aktivieren und dann den Button zu drücken. Sie sollten "You 'aint seen me, right?" vom Screenreader gesprochen hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)
- [ARIA Live-Regionen](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
