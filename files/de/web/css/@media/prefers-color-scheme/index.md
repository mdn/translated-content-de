---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS) [Medienfeature](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer ein helles oder dunkles Farbthema angefordert hat.
Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. Hell- oder Dunkelmodus) oder eine Benutzereinstellung im Browser an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht `prefers-color-scheme` es, einen CSS-Stil für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Elternelements auf der Webseite festzulegen.
SVGs müssen eingebettet (d.h. `<img src="circle.svg" alt="circle" />`) und nicht [inline in HTML](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example) verwendet werden.
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Vererbtes Farbschema in eingebetteten Elementen"](#vererbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [Cross-Origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>`- und `<iframe>`-Elementen erlaubt. Cross-Origin-Elemente sind Elemente, die von einem anderen Host als der Seite, die sie referenziert, abgerufen werden.
Um mehr über SVGs zu erfahren, lesen Sie die [SVG-Dokumentation](/de/docs/Web/SVG), und für weitere Informationen über iframes, lesen Sie die [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Zeigt an, dass der Benutzer mitgeteilt hat, dass er eine Oberfläche mit einem hellen Thema bevorzugt oder keine aktive Präferenz geäußert hat.
- `dark`
  - : Zeigt an, dass der Benutzer mitgeteilt hat, dass er eine Oberfläche mit einem dunklen Thema bevorzugt.

## Beispiele

### Erkennung eines dunklen oder hellen Themas

Eine häufige Verwendung ist es, standardmäßig ein helles Farbschema zu verwenden und dann mit `prefers-color-scheme: dark` die Farben auf eine dunklere Variante zu überschreiben. Es ist auch möglich, es umgekehrt zu machen.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann jedoch zu dunklen Farben überschrieben werden. Thema B verwendet dunkle Farben, kann jedoch zu hellen Farben überschrieben werden. Am Ende werden beide Themen, wenn der Browser `prefers-color-scheme` unterstützt, hell oder dunkel sein.

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

Thema A (braun) verwendet standardmäßig ein helles Farbschema, schaltet jedoch auf ein dunkles Schema um, basierend auf der Medienabfrage:

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

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, schaltet jedoch auf ein helles Schema um, basierend auf der Medienabfrage:

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

Die linken Boxen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme` Medienabfrage aussehen würden. Die rechten Boxen zeigen dieselben Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert. Die Umrandung einer Box wird gestrichelt oder gepunktet sein, wenn sie basierend auf Ihren Browser- oder Betriebssystemeinstellungen geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Vererbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie man das Medienfeature `prefers-color-scheme` in einem eingebetteten Element verwenden kann, um ein Farbschema von einem Elternelement zu erben.
Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und ihre `alt`-Attribute festzulegen. Normalerweise würde dies in HTML als `<img src="circle.svg" alt="circle" />` getan.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet ist.
Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mit dem Themenswitcher des Betriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media`-Abfrage ermöglicht das Festlegen von Stilen des SVG-Inhalts basierend auf dem `color-scheme` des Elternelements.
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
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Simulieren von prefers-color-scheme in Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Codierung eines Dunkelmodus für Ihre Website](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Neugestaltung Ihres Produkts und Ihrer Website für den Dunkelmodus](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Ändern von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
