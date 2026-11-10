---
title: "`prefers-color-scheme` CSS-Medienmerkmal"
short-title: prefers-color-scheme
slug: Web/CSS/Reference/At-rules/@media/prefers-color-scheme
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

Das **`prefers-color-scheme`**-[CSS](/de/docs/Web/CSS)-[Medienmerkmal](/de/docs/Web/CSS/Guides/Media_queries/Using#targeting_media_features) wird verwendet, um zu erkennen, ob ein Benutzer ein helles oder dunkles Farbschema angefordert hat.
Benutzer geben ihre Präferenz über eine Einstellung des Betriebssystems (z. B. den hellen oder dunklen Modus) oder des User Agents an.

## Eingebettete Elemente

Für SVGs und iframes können Sie mit `prefers-color-scheme` einen CSS-Stil für das SVG oder den iframe festlegen, der auf dem {{cssxref("color-scheme")}} des übergeordneten Elements auf der Webseite basiert.
SVGs müssen eingebettet sein (d.h. `<img src="circle.svg" alt="circle" />`), statt [direkt in HTML eingebunden](/de/docs/Web/SVG/Guides/SVG_in_HTML#basic_example) zu werden.
Ein Beispiel für die Verwendung von `prefers-color-scheme` in SVGs finden Sie im Abschnitt [Geerbtes Farbschema in eingebetteten Elementen](#geerbtes_farbschema_in_eingebetteten_elementen).

`prefers-color-scheme` kann auch in [Cross-Origin](/de/docs/Web/Security/Defenses/Same-origin_policy#cross-origin_network_access)-Elementen wie `<svg>` und `<iframe>` verwendet werden. Cross-Origin-Elemente werden von einem anderen Host abgerufen als dem, von dem die Seite stammt, die auf sie verweist.
Weitere Informationen zu SVGs finden Sie in der [SVG-Dokumentation](/de/docs/Web/SVG), weitere Informationen zu iframes in der [iframe-Dokumentation](/de/docs/Web/HTML/Reference/Elements/iframe).

## Syntax

- `light`
  - : Gibt an, dass der Benutzer eine Oberfläche mit hellem Farbschema bevorzugt oder keine ausdrückliche Präferenz angegeben hat.
- `dark`
  - : Gibt an, dass der Benutzer eine Oberfläche mit dunklem Farbschema bevorzugt.

## Beispiele

### Ein dunkles oder helles Farbschema erkennen

Üblicherweise wird standardmäßig ein helles Farbschema verwendet, dessen Farben mit `prefers-color-scheme: dark` durch dunklere Varianten ersetzt werden. Es ist auch möglich, umgekehrt vorzugehen.

Dieses Beispiel zeigt beide Möglichkeiten: Farbschema A verwendet helle Farben, die durch dunkle Farben ersetzt werden können. Farbschema B verwendet dunkle Farben, die durch helle Farben ersetzt werden können. Wenn der Browser `prefers-color-scheme` unterstützt, erscheinen beide Farbschemata letztlich hell oder dunkel.

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

Farbschema A (braun) verwendet standardmäßig ein helles Farbschema, wechselt aber aufgrund der Medienabfrage zu einem dunklen Farbschema:

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

Farbschema B (blau) verwendet standardmäßig ein dunkles Farbschema, wechselt aber aufgrund der Medienabfrage zu einem hellen Farbschema:

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

Die Kästchen links zeigen Farbschema A und Farbschema B, wie sie ohne die Medienabfrage `prefers-color-scheme` erscheinen würden. Die Kästchen rechts zeigen dieselben Farbschemata, wobei eines davon entsprechend dem aktiven Farbschema des Benutzers in eine dunklere oder hellere Variante geändert wird. Die Umrandung eines Kästchens ist gestrichelt oder gepunktet, wenn es aufgrund der Einstellungen Ihres Browsers oder Betriebssystems geändert wurde.

{{EmbedLiveSample("Detecting_a_dark_or_light_theme", "100%", "200px")}}

### Geerbtes Farbschema in eingebetteten Elementen

Das folgende Beispiel zeigt, wie Sie das Medienmerkmal `prefers-color-scheme` in einem eingebetteten Element verwenden, um ein Farbschema von einem übergeordneten Element zu erben.
Ein Skript legt die Quelle der `<img>`-Elemente und ihre `alt`-Attribute fest. Normalerweise würde dies in HTML als `<img src="circle.svg" alt="circle" />` erfolgen.

Sie sollten drei Kreise sehen, von denen einer in einer anderen Farbe dargestellt wird.
Der erste Kreis erbt `color-scheme` vom Betriebssystem. Sie können seine Darstellung ändern, indem Sie das Farbschema des Betriebssystems umschalten.

Der zweite und der dritte Kreis erben `color-scheme` vom einbettenden Element. Die `@media`-Abfrage ermöglicht es, Stile für den SVG-Inhalt anhand von `color-scheme` des übergeordneten Elements festzulegen.
In diesem Fall ist das übergeordnete Element mit der CSS-Eigenschaft `color-scheme` ein `<div>`.

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

{{EmbedLiveSample("inherited_color_scheme_in_embedded_elements")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- CSS-Eigenschaft {{cssxref("color-scheme")}}
- [`<meta name="color-scheme">`](/de/docs/Web/HTML/Reference/Elements/meta/name/color-scheme)
- {{HTTPHeader("Sec-CH-Prefers-Color-Scheme")}}-HTTP-Header [User Agent Client Hint](/de/docs/Web/HTTP/Guides/Client_hints#user_agent_client_hints)
- [prefers-color-scheme in Firefox simulieren](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#view-media-rules-for-prefers-color-scheme)
- [Video: Einen dunklen Modus für Ihre Website programmieren](https://www.youtube.com/watch?v=jmepqJ5UbuM)
- [Ihr Produkt und Ihre Website für den dunklen Modus neu gestalten](https://stuffandnonsense.co.uk/blog/redesigning-your-product-and-website-for-dark-mode/)
- Farbschemata unter [Windows](https://blogs.windows.com/windowsexperience/2019/04/01/windows-10-tip-dark-theme-in-file-explorer/), [macOS](https://developer.apple.com/design/human-interface-guidelines/dark-mode), [Android](https://www.theverge.com/2019/5/7/18530599/google-android-q-features-hands-on-dark-mode-gestures-accessibility-io-2019) oder auf [anderen Plattformen](https://support.mozilla.org/en-US/questions/1271928) ändern.
