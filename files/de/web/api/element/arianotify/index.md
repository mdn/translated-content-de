---
title: "Element: ariaNotify() Methode"
short-title: ariaNotify()
slug: Web/API/Element/ariaNotify
l10n:
  sourceCommit: 9af64ef430ad722b9cc3f75ccabeb8989c23b988
---

{{ApiRef("DOM")}}{{SeeCompatTable}}

Die **`ariaNotify()`** Methode des [`Element`](/de/docs/Web/API/Element) Interfaces legt fest, dass ein bestimmter Text von einem {{Glossary("screen_reader", "Screenreader")}}, sofern verfügbar und aktiviert, angesagt werden soll.

## Syntax

```js-nolint
ariaNotify(announcement)
ariaNotify(announcement, options)
```

### Parameter

- `announcement`
  - : Ein String, der den anzusagenden Text angibt.
- `options` {{optional_inline}}
  - : Ein Optionsobjekt mit den folgenden Eigenschaften:
    - `priority`
      - : Ein enumerierter Wert, der die Priorität der Ansage angibt. Mögliche Werte sind:
        - `normal`
          - : Die Ansage hat normale Priorität. Sie wird nach jeder Ansage gesprochen, die ein Screenreader gerade macht.
        - `high`
          - : Die Ansage hat hohe Priorität. Sie wird sofort angesagt und unterbricht dabei jede Ansage, die ein Screenreader gerade macht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Die **`ariaNotify()`** Methode kann verwendet werden, um programmatisch eine Ansage des Screenreaders auszulösen. Diese Methode bietet ähnliche Funktionalitäten wie [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions), mit einigen Vorteilen:

- Live-Bereiche können nur Ansagen machen, nachdem Änderungen am DOM vorgenommen wurden, wohingegen eine `ariaNotify()`-Ansage jederzeit gemacht werden kann.
- Live-Bereich-Ansagen beinhalten das Vorlesen des aktualisierten Inhalts des geänderten DOM-Knotens, wohingegen der `ariaNotify()`-Ansageinhalt unabhängig vom DOM-Inhalt definiert werden kann.

Entwickler umgehen oft die Beschränkungen von Live-Bereichen, indem sie versteckte DOM-Knoten mit Live-Bereichen verwenden, die mit dem anzusagenden Inhalt aktualisiert werden. Dies ist ineffizient und fehleranfällig, und `ariaNotify()` bietet eine Möglichkeit, solche Probleme zu vermeiden.

Einige Screenreader lesen mehrere `ariaNotify()`-Ansagen nacheinander vor, aber dies kann nicht über alle Screenreader und Plattformen hinweg garantiert werden. Normalerweise wird nur die aktuellste Ansage gesprochen. Es ist zuverlässiger, mehrere Ansagen zu einer zusammenzufassen.

Zum Beispiel sollten die folgenden Aufrufe:

```js
elemRef.ariaNotify("Hello there.");
elemRef.ariaNotify("The time is now 8 o'clock.");
```

besser kombiniert werden:

```js
elemRef.ariaNotify("Hello there. The time is now 8 o'clock.");
```

Ein `ariaNotify()`-Aufruf kann auf jedem Element im DOM ausgelöst werden, außer auf solchen, die der Browser nicht als "interessant" für die Barrierefreiheit erachtet und die beim Erstellen des Barrierefreiheitsbaums ignoriert werden. Welche Elemente ignoriert werden, variiert je nach Browser, aber die Liste umfasst im Allgemeinen Containerelemente mit wenig bis gar keinem semantischen Wert, wie die Elemente {{htmlelement("html")}} und {{htmlelement("body")}}.

`ariaNotify()`-Ansagen erfordern keine {{Glossary("transient_activation", "transiente Aktivierung")}}; Sie sollten darauf achten, Screenreader-Benutzer nicht mit zu vielen Benachrichtigungen zu überfluten, da dies zu einer schlechten Benutzererfahrung führen könnte.

### Ansageprioritäten

Eine `ariaNotify()`-Ansage mit `priority: high` wird vor einer `ariaNotify()`-Ansage mit `priority: normal` angesagt.

`ariaNotify()`-Ansagen sind ungefähr gleichwertig mit den folgenden ARIA Live-Bereich-Ansagen:

- `ariaNotify()` `priority: high`: `aria-live="assertive"`.
- `ariaNotify()` `priority: normal`: `aria-live="polite"`.

Allerdings haben `aria-live`-Ansagen Vorrang vor `ariaNotify()`-Ansagen.

### Sprachauswahl

Screenreader wählen eine geeignete Stimme (in Bezug auf Akzent, Aussprache etc.) für `ariaNotify()`-Ansagen basierend auf der Sprache, die im [`lang`](/de/docs/Web/HTML/Reference/Global_attributes/lang) Attribut des Elements angegeben ist, oder, falls das Element kein spezifiziertes `lang`-Attribut hat, dem `lang`-Attribut seines nächsten Vorfahren. Wenn im HTML kein `lang`-Attribut angegeben ist, wird die Standardsprache des User-Agents verwendet.

### Berechtigungspolitik-Integration

Die Nutzung von `ariaNotify()` in einem Dokument oder {{htmlelement("iframe")}} kann von einer {{httpheader("Permissions-Policy/aria-notify", "aria-notify")}} [Berechtigungspolitik](/de/docs/Web/HTTP/Guides/Permissions_Policy) gesteuert werden.

Insbesondere, wenn eine definierte Politik die Nutzung blockiert, schlagen alle mit `ariaNotify()` erstellten Ansagen stillschweigend fehl (sie werden nicht gesendet).

## Beispiele

Für ein umfangreicheres Beispiel siehe das [Accessible shopping list example](/de/docs/Web/API/Document/ariaNotify#accessible_shopping_list_example) auf der [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify) Seite. Das Beispiel würde genauso funktionieren, wenn Sie `ariaNotify()` auf einem Element-Referenz anstatt auf dem `Document`-Objekt aufrufen würden.

### Grundlegende `ariaNotify()`-Nutzung

Dieses Beispiel beinhaltet einen {{htmlelement("button")}}, der beim Klicken eine Ansage für den Screenreader auf sich selbst auslöst.

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
  document.querySelector("button").ariaNotify("You ain't seen me, right?");
});
```

#### Ergebnis

Die Ausgabe ist wie folgt:

{{EmbedLiveSample("basic-arianotify", "100%", 60, , , , "aria-notify")}}

Versuchen Sie, einen Screenreader zu aktivieren und dann den Button zu drücken. Sie sollten "You ain't seen me, right?" vom Screenreader gehört werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`Document.ariaNotify()`](/de/docs/Web/API/Document/ariaNotify)
- [ARIA Live-Bereiche](/de/docs/Web/Accessibility/ARIA/Guides/Live_regions)
