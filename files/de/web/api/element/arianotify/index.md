---
title: "Element: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Element/ariaNotify
l10n:
  sourceCommit: 93e3c303704c560ce28cc7764ff0069e67c48e79
---

{{ApiRef("DOM")}}

Die **`ariaNotify()`** Methode des [`Element`](/de/docs/Web/API/Element) Schnittstelle gibt an, dass ein gegebener Text von einem {{Glossary("screen_reader", "Screenreader")}} angesagt werden soll, falls verfügbar und aktiviert.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Ein String der den anzusagenden Text spezifiziert.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt, das die folgenden Eigenschaften enthält:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ansage angibt. Mögliche Werte sind:
        - `normal`
          - : Die Ansage hat normale Priorität. Sie wird nach jeder Ansage gesprochen, die ein Screenreader aktuell macht.
        - `high`
          - : Die Ansage hat hohe Priorität. Sie wird sofort gesprochen und unterbricht jede Ansage, die ein Screenreader aktuell macht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`** Methode kann verwendet werden, um programmatisch eine Screenreader-Ansage auszulösen. Diese Methode bietet eine ähnliche Funktionalität wie [ARIA-Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Bereiche können nur Ansagen machen, wenn sich Änderungen im DOM ergeben, während eine `ariaNotify()`-Ansage jederzeit gemacht werden kann.
- Live-Bereich-Ansagen beinhalten das Vorlesen des aktualisierten Inhalts des geänderten DOM-Knotens, während `ariaNotify()`-Ansagen unabhängig vom DOM-Inhalt definiert werden können.

Entwickler umgehen oft die Einschränkungen von Live-Bereichen, indem sie versteckte DOM-Knoten mit Live-Bereichen erstellen, deren Inhalte mit dem anzusagenden Inhalt aktualisiert werden. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()`-Ansagen der Reihe nach, aber dies kann nicht über alle Screenreader und Plattformen hinweg garantiert werden. Normalerweise wird nur die aktuellste Ansage gesprochen. Es ist zuverlässiger, mehrere Ansagen zu einer zusammenzufassen.

Zum Beispiel sollten die folgenden Aufrufe:

```js
elemRef.ariaNotify("Hello there.");
elemRef.ariaNotify("The time is now 8 o'clock.");
```

besser kombiniert werden:

```js
elemRef.ariaNotify("Hello there. The time is now 8 o'clock.");
```

Ein `ariaNotify()`-Aufruf kann auf jedem Element im DOM ausgelöst werden, außer bei solchen, die der Browser nicht als "interessant" für die Barrierefreiheit betrachtet und beim Erstellen des Accessibility-Baums ignoriert. Welche Elemente ignoriert werden, variiert je nach Browser, aber die Liste umfasst im Allgemeinen Containerelemente von geringem oder keinem semantischen Wert, wie die {{htmlelement("html")}} und {{htmlelement("body")}} Elemente.

`ariaNotify()`-Ansagen erfordern keine {{Glossary("transient_activation", "transiente Aktivierung")}}; Sie sollten darauf achten, Screenreader-Benutzer nicht mit zu vielen Benachrichtigungen zu überfluten, da dies eine schlechte Benutzererfahrung darstellen könnte.

### Ansageprioritäten

Eine `ariaNotify()`-Ansage mit `priority: high` wird vor einer `ariaNotify()`-Ansage mit `priority: normal` angesagt.

`ariaNotify()`-Ansagen sind ungefähr äquivalent zu ARIA-Live-Bereich-Ansagen wie folgt:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Allerdings haben `aria-live`-Ansagen Vorrang vor `ariaNotify()`-Ansagen.

### Sprachauswahl

Screenreader wählen eine geeignete Stimme, um `ariaNotify()`-Ansagen zu lesen (in Bezug auf Akzent, Aussprache usw.), basierend auf der Sprache, die im [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut des Elements spezifiziert ist oder, falls das Element kein spezifiziertes `lang` Attribut hat, dem `lang` Attribut, das auf seinem nächsten Vorfahren gesetzt ist. Wenn kein `lang` Attribut im HTML angegeben ist, wird die Standardsprache des Benutzeragenten verwendet.

### Permissions-Policy-Integration

Die Verwendung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann durch eine {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Permissions Policy](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Speziell, wo eine definierte Richtlinie die Nutzung blockiert, schlägt jede mit `ariaNotify()` erstellte Ansage leise fehl (sie wird nicht gesendet).

## Beispiele

Für ein ausführlicheres Beispiel siehe das [Beispiel für eine zugängliche Einkaufsliste](/de/docs/Web/API/Document/ariaNotify#accessible_shopping_list_example) auf der [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Seite. Das Beispiel würde genauso funktionieren, wenn Sie `ariaNotify()` auf einem Element-Referenz anstelle des `Document` Objekts aufrufen.

### Grundlegende `ariaNotify()`-Verwendung

Dieses Beispiel enthält einen {{htmlelement("button")}}, der eine Screenreader-Ansage auf sich selbst auslöst, wenn er angeklickt wird.

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

Versuchen Sie, einen Screenreader zu aktivieren und dann den Knopf zu drücken. Sie sollten "You 'aint seen me, right?" vom Screenreader gesprochen hören.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)
- [ARIA live regions](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
