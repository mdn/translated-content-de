---
title: "`prefers-color-scheme` CSS-Media-Feature"
short-title: prefers-color-scheme
slug: Web/CSS/Reference/At-rules/@media/prefers-color-scheme
l10n:
  sourceCommit: 67d40334c8b90e4623f3b0d3aea466b9882d8236
---

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer ein helles oder dunkles Farbthema angefordert hat. Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. Licht- oder Dunkelmodus) oder eine Benutzereinstellung an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht `prefers-color-scheme` das Setzen eines CSS-Stils für das SVG oder iframe basierend auf dem {{cssxref("color-scheme")}} des übergeordneten Elements auf der Webseite. SVGs müssen eingebettet verwendet werden (z. B. `<img src="circle.svg" alt="circle" />`) anstatt [in HTML eingebettet](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example). Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Vererbtes Farbschema in eingebetteten Elementen"](#vererbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [Cross-Origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen erlaubt. Cross-Origin-Elemente sind Elemente, die von einem anderen Host als der Seite, die sie referenziert, abgerufen werden. Um mehr über SVGs zu erfahren, sehen Sie sich die [SVG-Dokumentation](/de/docs/Web/SVG) an, und für weitere Informationen über iframes, sehen Sie sich die [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe) an.

## Syntax

- `light`
  - : Gibt an, dass der Benutzer mitgeteilt hat, dass er eine Benutzeroberfläche mit einem hellen Thema bevorzugt oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer mitgeteilt hat, dass er eine Benutzeroberfläche mit einem dunklen Thema bevorzugt.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung ist es, ein helles Farbschema standardmäßig zu verwenden und dann `prefers-color-scheme: dark` zu benutzen, um die Farben zu einer dunkleren Variante zu überschreiben. Es ist auch möglich, es umgekehrt zu machen.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann jedoch zu dunklen Farben überschrieben werden. Thema B verwendet dunkle Farben, kann jedoch zu hellen Farben überschrieben werden. Am Ende, wenn der Browser `prefers-color-scheme` unterstützt, werden beide Themen hell oder dunkel sein.

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
  outline: 2px solid black;
  width: 12em;
  height: 2em;
  vertical-align: middle;
}
```

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wechselt jedoch basierend auf der Media-Abfrage zu einem dunklen Schema:

```css
.theme-a {
  background: #ddccaa;
  color: #773311;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #775533;
    color: #ddccbb;
    outline: 5px dashed black;
  }
}
```

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt jedoch basierend auf der Media-Abfrage zu einem hellen Schema:

```css
.theme-b {
  background: #444477;
  color: #bbbbdd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bbccdd;
    color: #333344;
    outline: 5px dotted black;
  }
}
```

#### Ergebnis

Die linken Kästchen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme` Media-Abfrage erscheinen würden. Die rechten Kästchen zeigen die gleichen Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers zu einer dunkleren oder helleren Variante geändert. Der Umriss eines Kästchens wird gestrichelt oder gepunktet sein, wenn er basierend auf den Einstellungen Ihres Browsers oder Betriebssystems geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Vererbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie Sie das `prefers-color-scheme` Media-Feature in einem eingebetteten Element verwenden, um ein Farbschema von einem übergeordneten Element zu erben. Ein Skript wird verwendet, um die Quelle der `<img>` Elemente und ihre `alt` Attribute zu setzen. Normalerweise würde dies in HTML im Format `<img src="circle.svg" alt="circle" />` gemacht werden.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet ist. Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mit dem Themenschalter des Betriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erbt das `color-scheme` vom einbettenden Element; die `@media` Abfrage erlaubt das Setzen von Stilen des SVG-Inhalts basierend auf dem `color-scheme` des übergeordneten Elements. In diesem Fall ist das übergeordnete Element mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

```html
<div>
  <img alt="circle" src="" />
</div>
<div class="light">
  <img alt="circle" src="" />
</div>
<div class="dark">
  <img alt="circle" src="" />
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
for (const img of document.querySelectorAll("img")) {
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
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Einen Dunkelmodus für Ihre Website codieren](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Ihr Produkt und Ihre Website für den Dunkelmodus neu gestalten](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Ändern von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
