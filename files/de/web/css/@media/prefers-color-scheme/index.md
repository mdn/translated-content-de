---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: 7f460077d6f16c939718e9482a8270166f6d9abd
---

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat. Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. Hell- oder Dunkelmodus) oder eine Benutzereinstellung an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht `prefers-color-scheme` das Festlegen eines CSS-Stils für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Elternelements auf der Webseite. SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) und nicht [direkt im HTML eingebunden](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example). Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Vererbtes Farbschema in eingebetteten Elementen"](#vererbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` in [Cross-Origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>` Elementen ist erlaubt. Cross-Origin-Elemente sind Elemente, die von einem anderen Host als die verweisende Seite abgerufen werden. Um mehr über SVGs zu erfahren, lesen Sie die [SVG-Dokumentation](/de/docs/Web/SVG) und für weitere Informationen über iframes, lesen Sie die [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Zeigt an, dass der Benutzer mitgeteilt hat, dass er eine Oberfläche bevorzugt, die ein helles Thema hat, oder keine aktive Präferenz geäußert hat.
- `dark`
  - : Zeigt an, dass der Benutzer mitgeteilt hat, dass er eine Oberfläche bevorzugt, die ein dunkles Thema hat.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung besteht darin, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark` zu nutzen, um die Farben auf eine dunklere Variante zu überschreiben. Es ist auch möglich, es umgekehrt zu tun.

Dieses Beispiel zeigt beide Optionen: Theme A verwendet helle Farben, kann aber auf dunkle Farben überschrieben werden. Theme B verwendet dunkle Farben, kann aber auf helle Farben überschrieben werden. Am Ende, wenn der Browser `prefers-color-scheme` unterstützt, werden beide Themes hell oder dunkel sein.

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

Theme A (braun) verwendet standardmäßig ein helles Farbschema, wechselt aber zu einem dunklen Schema basierend auf der Medienabfrage:

```css
.theme-a {
  background: #dca;
  color: #731;
}
@media (prefers-color-scheme: dark) {
  .theme-a.adaptive {
    background: #753;
    color: #dcb;
    outline: 5px dashed black;
  }
}
```

Theme B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt aber zu einem hellen Schema basierend auf der Medienabfrage:

```css
.theme-b {
  background: #447;
  color: #bbd;
}
@media (prefers-color-scheme: light) {
  .theme-b.adaptive {
    background: #bcd;
    color: #334;
    outline: 5px dotted black;
  }
}
```

#### Ergebnis

Die linken Felder zeigen Theme A und Theme B, wie sie ohne die `prefers-color-scheme` Medienabfrage erscheinen würden. Die rechten Felder zeigen die gleichen Themes, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert. Der Umriss eines Kastens wird gestrichelt oder gepunktet sein, wenn er basierend auf Ihren Browser- oder Betriebssystemeinstellungen geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Vererbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie man das `prefers-color-scheme` Medienfeature in einem eingebetteten Element verwendet, um ein Farbschema von einem Elternelement zu erben. Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und deren `alt`-Attribute festzulegen. Normalerweise würde dies in HTML als `<img src="circle.svg" alt="circle" />` erfolgen.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet wird. Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann über den Theme-Umschalter des Systems OS umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media`-Abfrage ermöglicht das Festlegen von Stilen des SVG-Inhalts basierend auf dem `color-scheme` des Elternelements. In diesem Fall ist das Elternelement mit einer `color-scheme` CSS-Eigenschaft ein `<div>`.

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
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Coding a Dark Mode for your Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Redesign Ihrer Produkte und Website für den Dunkelmodus](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Ändern von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
