---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{CSSRef}}

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Medienmerkmal](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um festzustellen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat.
Ein Benutzer gibt seine Präferenz durch eine Einstellung im Betriebssystem (z. B. heller oder dunkler Modus) oder eine Benutzereinstellung an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht `prefers-color-scheme`, dass Sie einen CSS-Stil für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Elternelements der Webseite festlegen.
SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) und nicht [im HTML eingebettet](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example).
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Geerbtes Farbschema in eingebetteten Elementen"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [`cross-origin`](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen erlaubt. Cross-origin-Elemente sind Elemente, die von einem anderen Host als der Seite, die auf sie verweist, abgerufen werden.
Um mehr über SVGs zu erfahren, siehe die [SVG-Dokumentation](/de/docs/Web/SVG), und um mehr über iframes zu erfahren, siehe die [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer mitgeteilt hat, dass er eine Benutzeroberfläche mit einem hellen Thema bevorzugt oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer mitgeteilt hat, dass er eine Benutzeroberfläche mit einem dunklen Thema bevorzugt.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung ist die Verwendung eines hellen Farbschemas standardmäßig und dann die Verwendung von `prefers-color-scheme: dark`, um die Farben in eine dunklere Variante zu ändern. Es ist auch möglich, es umgekehrt zu tun.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann jedoch auf dunkle Farben umgestellt werden. Thema B verwendet dunkle Farben, kann jedoch auf helle Farben umgestellt werden. Am Ende, wenn der Browser `prefers-color-scheme` unterstützt, werden beide Themen hell oder dunkel sein.

#### HTML

```html
<div class="box theme-a">Theme A (initial)</div>
<div class="box theme-a adaptive">Theme A (changed if dark preferred)</div>
<br />

<div class="box theme-b">Theme B (initial)</div>
<div class="box theme-b adaptive">Theme B (changed if light preferred)</div>
```

#### CSS

```css hidden
div.box {
  display: inline-block;
  padding: 1em;
  margin: 6px;
  outline: 2px solid #000;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wechselt jedoch basierend auf der Medienabfrage zu einem dunklen Schema:

```css
.theme-a {
  background: #dca;
  color: #731;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #753;
    color: #dcb;
    outline: 5px dashed #000;
  }
}
```

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt jedoch basierend auf der Medienabfrage zu einem hellen Schema:

```css
.theme-b {
  background: #447;
  color: #bbd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bcd;
    color: #334;
    outline: 5px dotted #000;
  }
}
```

#### Ergebnis

Die linken Kästchen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme` Medienabfrage erscheinen würden. Die rechten Kästchen zeigen die gleichen Themen, wobei eines von ihnen basierend auf dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert wird. Der Rand eines Kastens wird gestrichelt oder gepunktet sein, wenn er basierend auf Ihren Browser- oder Betriebssystemeinstellungen geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie man das `prefers-color-scheme` Medienmerkmal in einem eingebetteten Element verwendet, um ein Farbschema von einem Elternelement zu erben.
Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und ihre `alt`-Attribute festzulegen. Dies würde normalerweise in HTML als `<img src="circle.svg" alt="circle" />` getan werden.

Es sollten drei Kreise zu sehen sein, von denen einer in einer anderen Farbe gezeichnet ist.
Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mit dem Themenswitcher des Systems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media` Abfrage ermöglicht das Festlegen von Stilen des SVG-Inhalts basierend auf dem `color-scheme` des Elternelements.
In diesem Fall ist das Elternelement mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

```html
<div>
  <img />
</div>
<div class="light">
  <img />
</div>
<div class="dark">
  <img />
</div>
```

```css
.light {
  color-scheme: light;
}

.dark {
  color-scheme: dark;
}
```

```js
// Embed an SVG for all <img> elements
for (let img of document.querySelectorAll("img")) {
  img.alt = "circle";
  img.src = `data:image/svg+xml;base64,${window.btoa(`
    <svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
      <style>
        :root { color: blue }
        @media (prefers-color-scheme: dark) {
          :root { color: purple }
        }
      </style>
      <circle fill="currentColor" cx="16" cy="16" r="16"/>
    </svg>
  `)}`;
}
```

{{EmbedLiveSample("Color_scheme_inheritance")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("color-scheme")}} Eigenschaft
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name#color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Erstellen eines Dunkelmodus für Ihre Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Neugestaltung Ihres Produkts und Ihrer Website für den Dunkelmodus](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Farbänderungen in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
