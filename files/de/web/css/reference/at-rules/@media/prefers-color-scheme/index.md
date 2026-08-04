---
title: "`prefers-color-scheme` CSS Media-Feature"
short-title: prefers-color-scheme
slug: Web/CSS/Reference/At-rules/@media/prefers-color-scheme
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Media-Feature](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat.
Ein Benutzer gibt seine Präferenz über eine Einstellung des Betriebssystems (z. B. Licht- oder Dunkelmodus) oder eine Einstellung des User-Agents an.

## Eingebettete Elemente

Für SVG und iframes ermöglicht `prefers-color-scheme`, einen CSS-Stil für das SVG oder iframe basierend auf dem {{cssxref("color-scheme")}} des übergeordneten Elements in der Webseite festzulegen.
SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) im Gegensatz zu [in HTML eingebetteten SVGs](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example).
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Geerbtes Farbschema in eingebetteten Elementen"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [cross-origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen erlaubt. Cross-origin Elemente sind Elemente, die von einem anderen Host als der Seite, die sie referenziert, abgerufen werden.
Um mehr über SVGs zu erfahren, sehen Sie sich die [SVG-Dokumentation](/de/docs/Web/SVG) an, und für mehr Informationen über Iframes, siehe die [Iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer angegeben hat, dass er eine Oberfläche mit hellem Thema bevorzugt, oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer angegeben hat, dass er eine Oberfläche mit dunklem Thema bevorzugt.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung besteht darin, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark` zu verwenden, um die Farben zu einer dunkleren Variante zu überschreiben. Es ist auch möglich, es umgekehrt zu tun.

Dieses Beispiel zeigt beide Optionen: Theme A verwendet helle Farben, kann aber zu dunklen Farben überschrieben werden. Theme B verwendet dunkle Farben, kann aber zu hellen Farben überschrieben werden. Am Ende werden, wenn der Browser `prefers-color-scheme` unterstützt, beide Themes hell oder dunkel sein.

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

Theme A (braun) verwendet standardmäßig ein helles Farbschema, wechselt aber basierend auf der Media-Query zu einem dunklen Schema:

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

Theme B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt aber basierend auf der Media-Query zu einem hellen Schema:

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

Die linken Kästchen zeigen Theme A und Theme B, wie sie ohne die `prefers-color-scheme` Media-Query erscheinen würden. Die rechten Kästchen zeigen die gleichen Themes, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers zu einer dunkleren oder helleren Variante geändert. Der Umriss eines Kästchens wird gestrichelt oder gepunktet, wenn es basierend auf Ihren Browser- oder Betriebssystemeinstellungen geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie man das `prefers-color-scheme` Media-Feature in einem eingebetteten Element verwendet, um ein Farbschema von einem übergeordneten Element zu erben.
Ein Skript wird verwendet, um die Quelle der `<img>` Elemente und ihre `alt` Attribute festzulegen. Dies würde normalerweise im HTML als `<img src="circle.svg" alt="circle" />` gemacht.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet ist.
Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mittels des Theme-Schalters des Systems umgeschaltet werden.

Der zweite und der dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media` Abfrage erlaubt das Setzen von Stilen des SVG-Inhalts basierend auf dem `color-scheme` des übergeordneten Elements.
In diesem Fall ist das übergeordnete Element mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

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
- [Video: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesigning your product and website for dark mode](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode/)
- Ändern von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
