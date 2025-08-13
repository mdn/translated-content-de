---
title: prefers-color-scheme
slug: Web/CSS/@media/prefers-color-scheme
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

Das **`prefers-color-scheme`** [CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer helle oder dunkle Farbthemen angefordert hat. Ein Benutzer gibt seine Präferenz über eine Betriebssystemeinstellung (z. B. heller oder dunkler Modus) oder eine Benutzeragenteinstellung an.

## Eingebettete Elemente

Für SVGs und iframes ermöglicht es `prefers-color-scheme`, einen CSS-Stil für das SVG oder iframe basierend auf dem [`color-scheme`](/de/docs/Web/CSS/color-scheme) des Elternelements auf der Webseite festzulegen. SVGs müssen eingebettet verwendet werden (d.h. `<img src="circle.svg" alt="circle" />`) anstelle von [inline in HTML](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example). Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt ["Geerbtes Farbschema in eingebetteten Elementen"](#geerbtes_farbschema_in_eingebetteten_elementen).

Die Verwendung von `prefers-color-scheme` ist in [Cross-Origin](/de/docs/Web/Security/Same-origin_policy#cross-origin_network_access) `<svg>` und `<iframe>`-Elementen erlaubt. Cross-Origin-Elemente sind Elemente, die von einem anderen Host als der Seite, die sie referenziert, abgerufen werden. Um mehr über SVGs zu erfahren, sehen Sie die [SVG-Dokumentation](/de/docs/Web/SVG) und für Informationen über iframes, sehen Sie die [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer bevorzugt, dass die Oberfläche ein helles Thema hat oder keine aktive Präferenz ausgedrückt hat.
- `dark`
  - : Gibt an, dass der Benutzer bevorzugt, dass die Oberfläche ein dunkles Thema hat.

## Beispiele

### Erkennen eines dunklen oder hellen Themas

Eine häufige Verwendung besteht darin, standardmäßig ein helles Farbschema zu verwenden und dann `prefers-color-scheme: dark` zu nutzen, um die Farben in eine dunklere Variante zu ändern. Es ist auch möglich, es andersherum zu tun.

Dieses Beispiel zeigt beide Optionen: Thema A verwendet helle Farben, kann aber zu dunklen Farben überschrieben werden. Thema B verwendet dunkle Farben, kann aber zu hellen Farben überschrieben werden. Am Ende werden, wenn der Browser `prefers-color-scheme` unterstützt, beide Themen entweder hell oder dunkel sein.

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

Thema A (braun) verwendet standardmäßig ein helles Farbschema, wird aber basierend auf der Medienabfrage zu einem dunklen Schema wechseln:

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

Thema B (blau) verwendet standardmäßig ein dunkles Farbschema, wird aber basierend auf der Medienabfrage zu einem hellen Schema wechseln:

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

Die linken Kästchen zeigen Thema A und Thema B, wie sie ohne die `prefers-color-scheme`-Medienabfrage erscheinen würden. Die rechten Kästchen zeigen die gleichen Themen, aber eines von ihnen wird basierend auf dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert. Der Umriss einer Box wird gestrichelt oder gepunktet sein, wenn er basierend auf Ihren Browser- oder Betriebssystemeinstellungen geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie das `prefers-color-scheme`-Medienmerkmal in einem eingebetteten Element verwendet wird, um ein Farbschema von einem Elternelement zu erben. Ein Skript wird verwendet, um die Quelle der `<img>`-Elemente und ihre `alt`-Attribute festzulegen. Normalerweise würde dies in HTML als `<img src="circle.svg" alt="circle" />` gemacht werden.

Sie sollten drei Kreise sehen, wobei einer in einer anderen Farbe gezeichnet ist. Der erste Kreis erbt das `color-scheme` vom Betriebssystem und kann mit dem Systemthemen-Umschalter des Betriebssystems umgeschaltet werden.

Der zweite und dritte Kreis erben das `color-scheme` vom einbettenden Element; die `@media`-Abfrage ermöglicht das Setzen von Stilen des SVG-Inhalts basierend auf dem `color-scheme` des Elternelements. In diesem Fall ist das Elternelement mit einer `color-scheme`-CSS-Eigenschaft ein `<div>`.

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
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}} HTTP-Header [Benutzeragenten-Client-Hinweis](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [Prefers-color-scheme in Firefox simulieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Eine Dunkelmodus für Ihre Website codieren](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Ihr Produkt und Ihre Website für den Dunkelmodus neu gestalten](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode)
- Ändern von Farbschemata in [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019), oder [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928).
