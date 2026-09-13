---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 03cb7e674d176cbb03bef39afa55e23f9f193e5a
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Verpflichtend</th>
      <td>Nein</td>
    </tr>
    <tr>
      <th scope="row">Manifest-Version</th>
      <td>2 oder höher</td>
    </tr>
    <tr>
      <th scope="row">Beispiel</th>
      <td>
        <pre class="brush: json">
"theme": {
  "images": {
    "theme_frame": "images/sun.jpg"
  },
  "colors": {
    "frame": "#CF723F",
    "tab_background_text": "black"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den `theme`-Schlüssel, um ein statisches Theme festzulegen, das auf Firefox angewendet werden soll. Wenn dieser allein bereitgestellt wird, definiert er das Theme, das verwendet wird, wenn Firefox entweder das helle oder dunkle Farbschema verwendet. Wenn der [`dark_theme`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) bereitgestellt wird, bietet dieser Schlüssel das Theme, das verwendet wird, wenn Firefox das helle Farbschema verwendet.

> [!NOTE]
> Wenn Sie ein Theme mit einer Erweiterung einschließen möchten, sehen Sie bitte die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, um installiert werden zu können ([Firefox-Fehler 1545109](https://bugzil.la/1545109)). Sehen Sie [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon) für weitere Details.

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bildattributen unterstützt:

- JPEG
- PNG
- APNG
- SVG (animierte SVG werden ab Firefox 59 unterstützt)
- GIF (animierte GIF werden nicht unterstützt)

## Syntax

Der `theme`-Schlüssel ist ein Objekt, das die folgenden Eigenschaften hat:

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>images</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional ab Firefox 60. Vor Firefox 60 verpflichtend.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die in verschiedenen Bereichen des Browsers anzuzeigenden Bilder darstellen. Siehe
          <code><a href="#images">images</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben verschiedener Teile des Browsers darstellen. Siehe <code><a href="#colors">colors</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>properties</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Optional</p>
        <p>
          Dieses Objekt hat Eigenschaften, die beeinflussen, wie die
          <code>"additional_backgrounds"</code> Elemente angezeigt werden und Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur manifest.json-Datei und können keine externe URL referenzieren.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie den Header-Bereich immer vertikal ausfüllen.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>theme_frame</code></td>
      <td><code>String</code> oder <code>Object</code></td>
      <td>
        <p>
          Ein Vordergrundbild (definiert durch den Pfad zu einer Bildressource, die in der Erweiterung verpackt ist) oder <a href="#css_gradient_syntax">CSS-Gradient</a>,
          das dem Headerbereich hinzugefügt wird und an der oberen rechten Ecke
          des Headerbereichs verankert ist. CSS-Gradients werden ab Firefox 153 unterstützt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild an der oberen linken Ecke
            des Headers und wenn das Bild den Headerbereich nicht ausfüllt, werden die Bilder gekachelt.
          </p>
        </div>
        <p>
          Optional in Desktop Firefox ab Version 60.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> von <code>String</code> oder <code>Object</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die
            <code>additional_backgrounds</code> Eigenschaft ist experimentell. Es wird in den veröffentlichten Versionen von Firefox akzeptiert, aber sein Verhalten kann sich ändern.
          </p>
        </div>
        <p>
          Ein Array zusätzlicher Hintergrundelemente, von denen jedes entweder der Pfad zu einer Bildressource, die in der Erweiterung verpackt ist, oder ein <a href="#css_gradient_syntax">CSS-Gradient</a> ist, welches dem Headerbereich hinzugefügt wird und hinter dem
          <code>"theme_frame":</code> Element angezeigt wird. Diese zusätzlichen Hintergrundelemente schichten das erste Element im
          Array oben und das letzte Element unten. CSS-Gradients werden ab Firefox 153 unterstützt.
        </p>
        <p>Optional</p>
        <p>
          Standardmäßig sind alle Elemente an der oberen rechten Ecke des
          Headerbereichs verankert, aber ihre Ausrichtung, Wiederholung und Größenverhalten sowie das
          Bereich des Browserfensters, in dem sie gezeichnet werden, können von
          <a href="#properties"><code>"properties":</code></a> gesteuert werden.
        </p>
        <p>
          Da zusätzliche Hintergrundelemente hinter dem <code>theme_frame</code>-Element angezeigt werden, sind diese ausgeblendeten, wenn <code>theme_frame</code> als CSS-Gradient gesetzt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### CSS-Gradientsyntax

Ein CSS-Gradient wird als Objekt in der Form `{ "GRADIENT_TYPE": "GRADIENT_PARAMS" }` angegeben, wobei:

- `GRADIENT_TYPE` ist einer der folgenden:
  - `linear-gradient`
  - `radial-gradient`
  - `conic-gradient`
  - `repeating-linear-gradient`
  - `repeating-radial-gradient`
  - `repeating-conic-gradient`
- `GRADIENT_PARAMS` enthält die Parameter für diese CSS-Gradientfunktion, wie in [CSS Gradientwerte](/de/docs/Web/CSS/Reference/Values/gradient) beschrieben.

### colors

Diese Eigenschaften definieren die Farben, die für verschiedene Teile des Browsers verwendet werden. Sie sind alle optional. Wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht über die Farbeigenschaften und ihre Anwendung auf die Firefox-Benutzeroberfläche"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn ein Bestandteil von mehreren Farbeigenschaften betroffen ist, sind die Eigenschaften in der Reihenfolge ihrer Priorität aufgeführt.

Alle diese Eigenschaften können entweder als Zeichenfolge angegeben werden, die einen gültigen [CSS-Farbenstring](/de/docs/Web/CSS/Reference/Values/color_value) (einschließlich hexadezimal) enthält, oder als RGB-Array, wie zum Beispiel `"tab_background_text": [ 107 , 99 , 23 ]`.

> [!NOTE]
> [In Chrome können Farben nur als RGB-Arrays spezifiziert werden](#chrome-kompatibilität).

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bookmark_text</code></td>
      <td>
        <p>
          Die Farbe von Text und Symbolen in der Lesezeichen- und Suchleiste. Wenn
          <code>tab_text</code> nicht definiert ist, wird die Farbe des aktiven Tab-Textes festgelegt, und wenn <code>icons</code> nicht definiert ist, die Farbe der
          Symbolleistensymbole. Bereitgestellt als Chrome-kompatibles Alias für
          <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut mit
            dem in <code>frame</code> und <code>frame_inactive</code> oder
            <code>toolbar</code> verwendeten Farbkontrasten kontrastiert, wenn Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, stellen Sie auch sicher, dass ein guter Kontrast
            mit <code>button_background_active</code> und
            <code>button_background_hover</code> besteht.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "tab_text": "white",
    "toolbar": "black",
    "bookmark_text": "red"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist schwarz. Der Tab des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die Suchleiste sind weiß mit schwarzem Text, aber alle Symbole in diesen Leisten sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Hintergrundfarbe der gedrückten Symbolleistenschaltflächen.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_active": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das anpassbare Symbol in der URL-Leiste ist weiß mit einem roten Hintergrund und gedrückt; ein Popup ist geöffnet, das eine kurze Liste von zum Werkzeug hinzufügbare Elemente anzeigt, wie z.B. die Bibliothek des Browsers und die Seitenleisten." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe der Symbolleistenschaltflächen beim Darüberfahren.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "button_background_hover": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Browser-Tabs und die URL-Leiste sind grau mit weißem Text. Das Symbol zum Zurückgehen auf einer Seite ist weiß mit einem roten Kreis als Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, außer denen in der Suchsymbolleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Browser-Tabs und die URL-Leiste sind grau mit weißem Text. Die URL-Leiste und das neue Tab-Symbol sind rot. Die roten Symbole kontrastieren gut mit der schwarzen Hintergrundfarbe des Headerbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Symbolleistensymbole im Status der Aufmerksamkeit, wie das Sternsymbol des Lesezeichens oder das Symbol des abgeschlossenen Downloads.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "icons_attention": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Browser-Tabs und die URL-Leiste sind grau mit weißem Text. Das Lesezeichen-Symbol ist rot und gedrückt; ein geöffnetes Popup mit dem Titel 'Dieses Lesezeichen bearbeiten' wird angezeigt. Während im Aufmerksamkeitszustand die Symbolleistensymbole gut mit dem schwarzen Hintergrund des Headerbereichs kontrastieren." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Headerbereichs-Hintergrunds, der in dem Teil des
          Headers angezeigt wird, der nicht von den in
          <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Elementen verdeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist vollständig rot mit weißem Text. Browsers Tabs sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Headerbereichs-Hintergrunds, wenn das Browserfenster
          inaktiv ist, angezeigt in dem Teil des Headers, der nicht von den in <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Elementen verdeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "frame_inactive": "gray",
     "tab_text": "white"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist grau. Browsers Tabs und URL-Leiste sind heller grau. Der Tab-Text ist weiß und die Symbole der URL-Leiste sind dunkler grau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Tab-Seite.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Karten auf der neuen Tab-Seite.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_card_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Auf der Seite ist der Hintergrund der Suchleiste und der Schaltflächen für Verknüpfungen rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe auf der neuen Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>ntp_background</code> und <code>ntp_card_background</code> kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Auf der Seite ist der Text rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie die Dropdown-Liste der URL-Leiste und die Pfeilfenster).
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite als Lesezeichen speichern' ist blau und gedrückt, ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird mit einem roten Hintergrund angezeigt. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Popups.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "white",
     "popup_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite als Lesezeichen speichern' ist blau und gedrückt; ein offenes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird mit einem roten Rahmen und schwarzem Hintergrund angezeigt. Der Rahmen des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von in Popups hervorgehobenen Elementen, die über die Tastatur ausgewählt werden (wie das ausgewählte Dropdown-Element der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen, <code>popup_highlight_text</code> zu definieren, um die Standardtextfarbe des Browsers auf verschiedenen Plattformen zu überschreiben.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "red",
     "popup_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot von Firefox, das schwarz ist. Die Tabs und die URL-Leiste sind heller grau mit weißen Symbolen und Text. Ein Suchergebnisse-Popup wird mit einem hervorgehobenen Element angezeigt, dessen Hintergrund rot ist. Die Hintergrundfarbe des hervorgehobenen Elements im Popup ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen in Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>popup_highlight</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup_highlight": "black",
     "popup_highlight_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnisse-Popup wird mit einem hervorgehobenen Element angezeigt, dessen Text rot und Hintergrund schwarz ist. Die Textfarbe des hervorgehobenen Elements kontrastiert gut mit der schwarzen Hintergrundfarbe dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>popup</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "popup": "black",
     "popup_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnisse-Popup wird mit roten Texten angezeigt. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>Die Hintergrundfarbe der Seitenleiste.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme-Screenshot einer geöffneten Seitenleiste eines Browserfensters. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rahmen- und Trennlinienfarbe der Browsersidebar</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox Browser-Lesezeichenseitenleiste mit einer roten horizontalen Trennlinie zwischen dem Listentitel und dem Menü in der Seitenleiste. Die Rahmen- und Trennlinienfarbe der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe der hervorgehobenen Zeilen in integrierten Seitenleisten</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "red",
     "sidebar_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox Browser-Lesezeichenseitenleiste mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe hervorgehobener Zeilen in Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>sidebar_highlight</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "pink",
    "sidebar_highlight_text": "red",
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme der Firefox Browser-Lesezeichenseitenleiste mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der rosa Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>sidebar</code> verwendeten Farbe kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar": "red",
     "sidebar_highlight": "white",
     "sidebar_highlight_text": "green",
     "sidebar_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme-Screenshot eines geöffneten Seitenleistenfensters eines Browsers. Die Textfarbe der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code> wird ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>Die Farbe des vertikalen Trennzeichens der Hintergrundtabs.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_background_separator": "red"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Eine Nahaufnahme der Browser-Tabs, um das Trennzeichen hervorzuheben."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Seiten-Tabs angezeigt wird. Wenn
          <code>tab_text</code> oder <code>bookmark_text</code> nicht festgelegt ist,
          wird es auf den aktiven Tab-Text angewendet.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            jenen in <code>tab_selected</code> oder <code>frame</code> und
            <code>frame_inactive</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "white",
    "tab_background_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes im geöffneten Tab ist rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Tabs." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der Linie des ausgewählten Tabs.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_line": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit helleren grauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Ladeindikators des Tabs und der Ladeburst des Tabs.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_loading": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit weißen Symbolen und Text. Innerhalb des ausgewählten Tabs ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht in Gebrauch, wird die Farbe des ausgewählten Tabs durch <code>frame</code> und
          <code>frame_inactive</code> festgelegt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_selected": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit weißen Symbolen und Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 stellt er die Textfarbe für den ausgewählten Tab dar. Wenn
          <code>tab_line</code> nicht festgelegt ist, definiert er auch die Farbe der
          Linie des ausgewählten Tabs.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den in <code>tab_selected</code> oder <code>frame</code> und
            <code>frame_inactive</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "images": {
  "theme_frame": "weta.png"
},
  "colors": {
     "frame": "black",
     "tab_background_text": "white",
     "tab_selected": "white",
     "tab_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox hat ein Insekt-Thema. URL-Leiste ist heller grau mit weißen Symbolen. Der ausgewählte Tab-Text ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und
          den ausgewählten Tab.
        </p>
        <p>Dies legt auch die Hintergrundfarbe der "Finden"-Leiste fest.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "red",
    "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die Seite-finden-Leiste und die URL-Leiste des Browsers sind rot mit weißen Texten und Symbolen, mit Ausnahme der Seite-finden-Leiste, wo der Text und das Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Bereich der Symbolleiste von
          dem darunter liegenden Bereich trennt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_bottom_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Texten und Symbolen. Eine horizontale rote Linie trennt die Unterseite der Symbolleiste und den Anfang der Anzeigeseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Symbolleiste, wie die URL-Leiste.
        </p>
        <p>
          Dies legt auch die Hintergrundfarbe des
          <strong>Seite-finden</strong> Feldes fest.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar_field": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Der Tab, die Seite-finden-Leiste und die URL-Leiste des Browsers sind heller grau mit weißen Texten und Symbolen. Die Hintergrundfarbe der URL-Leiste ist rot. Die Seite-finden-Leiste ist weiß mit schwarzem Text, und das Seite-finden-Feld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Symbolleiste.</p>
        <p>
          Dies legt auch die Rahmenfarbe des
          <strong>Seite-finden</strong> Feldes fest.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Der Tab, die Seite-finden-Leiste und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die URL-Leiste und das Seite-finden-Feld sind in rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die fokussierte Rahmenfarbe für Felder in der Symbolleiste.</p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_border_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Das URL-Leistenfeld ist fokussiert und in rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die fokussierte Hintergrundfarbe für Felder in der Symbolleiste, wie die
          URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die Seite-finden-Leiste und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot, und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die verwendet wird, um die aktuelle Textauswahl in
        der URL-Leiste anzuzeigen (und die Suchleiste, wenn sie so konfiguriert ist, dass sie separat ist).
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist weiß. Die Tabs des Browsers und die URL-Leiste sind weiß mit Text und Symbolen in schwarz. Das URL-Leistenfeld ist fokussiert und in blau umrandet sowie URL-Leistentext ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier spezifiziert das <code>toolbar_field_highlight</code>-Feld, dass
          die Hervorhebungsfarbe ein helles Grün ist, während der Text auf ein
          dunkel-mittleres Grün mit <code>toolbar_field_highlight_text</code> eingestellt wird.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um Text zu zeichnen, der derzeit in der URL-Leiste
          ausgewählt ist (und der Suchleiste, wenn sie als separater Kasten konfiguriert ist).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>toolbar_field_highlight</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "toolbar_field": "rgb(255 255 255 / 91%)",
    "toolbar_field_text": "rgb(0 100 0)",
    "toolbar_field_highlight": "rgb(180 240 180 / 90%)",
    "toolbar_field_highlight_text": "rgb(0 80 0)"
  }
}</pre
          >
        </details>
        <p>
          <img
            alt="Browser Firefox ist weiß. Die Tabs des Browsers und die URL-Leiste sind weiß mit Text und Symbolen in schwarz. Das URL-Leistenfeld ist fokussiert und in blau umrandet sowie URL-Leistentext ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das <code>toolbar_field_highlight_text</code>-Feld verwendet,
          um die Textfarbe auf ein mittleres Dunkelgrün einzustellen, während die
          Hervorhebungsfarbe ein helles Grün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code> wird
            ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Trennlinien innerhalb der URL-Leiste. In Firefox 58 wurde dies als
          <code>toolbar_vertical_separator</code> implementiert.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Innerhalb des weißen URL-Leistenfelds, nach dem Reader-Mode-Symbol, eine rote vertikale Linie, die den Rest der URL-Leistensymbole trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die
          rote vertikale Linie in der URL-Leiste, die das Leseansicht-Symbol von
          den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Symbolleiste, wie die URL-Leiste. Dies
          legt auch die Farbe des Textes im <strong>Seite-finden</strong> Feld fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>toolbar_field</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Der Text innerhalb der URL-Leiste ist rot. Die Symbole und das Seite-finden-Feld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Symbolleiste, wie die URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>toolbar_field_focus</code> verwendeten Farben kontrastiert.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "toolbar": "black",
    "tab_background_text": "white",
    "toolbar_field": "black",
    "toolbar_field_text": "white",
    "toolbar_field_text_focus": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die URL-Leiste ist fokussiert; der Text und die Symbole in der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in der Symbolleiste. Dies legt auch die Farbe des Textes
          in der "Finden"-Leiste fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Für die Kompatibilität mit Chrome verwenden Sie das Alias
            <code>bookmark_text</code>.
          </p>
        </div>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs, die Seite-finden-Leiste und die URL-Leiste des Browsers sind schwarz mit rotem Text und Symbolen. Der Text innerhalb des aktiven Tabs, der Navigationsleiste und der Findeleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Bereich der Symbolleiste von dem
          darüber liegenden Bereich trennt.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_top_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Eine rote Linie trennt den oberen Bereich der URL-Leiste vom Rest des Browsers." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe der Trennlinie in der Lesezeichensymbolleiste. In Firefox 58
          entspricht dies der Farbe der Trennlinien innerhalb der URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel anzeigen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "frame": "black",
    "tab_background_text": "white",
    "toolbar": "black",
    "toolbar_vertical_separator": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die Farbe der vertikalen Linie, die die Lesezeichensymbolleiste vom Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese werden zur Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben ist und die Nicht-Alias-Version ebenfalls angegeben ist, wird der Wert aus der Nicht-Alias-Version übernommen.

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Alias für</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>bookmark_text</code></td>
      <td><code>toolbar_text</code></td>
    </tr>
  </tbody>
</table>

### properties

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Typ</th>
      <th scope="col">Beschreibung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>additional_backgrounds_alignment</code></td>
      <td>
        <p><code>Array</code> von <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Enumerationswerten, die die Ausrichtung des
          entsprechenden <code>"additional_backgrounds":</code> Array-Elements definieren.<br />Die
          Ausrichtungsoptionen umfassen:
        </p>
        <ul>
          <li><code>"bottom"</code></li>
          <li><code>"center"</code></li>
          <li><code>"left"</code></li>
          <li><code>"right"</code></li>
          <li><code>"top"</code></li>
          <li><code>"center bottom"</code></li>
          <li><code>"center center"</code></li>
          <li><code>"center top"</code></li>
          <li><code>"left bottom"</code></li>
          <li><code>"left center"</code></li>
          <li><code>"left top"</code></li>
          <li><code>"right bottom"</code></li>
          <li><code>"right center"</code></li>
          <li><code>"right top"</code>.</li>
        </ul>
        <p>
        Wenn das Array enthält weniger Elemente als das <code>additional_backgrounds</code> Array, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_alignment</code> <code>["left", "top"]</code> enthält, wird das dritte Hintergrundelement unter Verwendung von <code>"left"</code>, das vierte unter Verwendung von <code>"top"</code> und das fünfte <code>"left"</code> ausgerichtet.
        </p>
        <p>Wenn nicht angegeben, ist die Standardeinstellung <code>"right top"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_tiling</code></td>
      <td>
        <p><code>Array</code> von <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Enumerationswerten, die festlegen, wie das entsprechende
          <code>"additional_backgrounds":</code> Array-Element wiederholt wird. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
        Wenn das Array enthält weniger Elemente als das <code>additional_backgrounds</code> Array, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_tiling</code> <code>["no-repeat", "repeat-x"]</code> enthält, wird das dritte Hintergrundelement unter Verwendung von <code>"no-repeat"</code>, das vierte mit <code>"repeat-x"</code> und das fünfte <code>"no-repeat"</code> gekachelt.
        </p>
        <p>Wenn nicht angegeben, ist die Standardeinstellung <code>"no-repeat"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds_size</code></td>
      <td>
        <p><code>Array</code> von <code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Ein Array von Werten, die die Größe des entsprechenden
          <code>"additional_backgrounds":</code> Array-Elements definieren. Akzeptiert die gleichen
          Werte wie die CSS
          <a href="/de/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a>
          Eigenschaft, wie zum Beispiel <code>"auto"</code>, <code>"cover"</code>,
          <code>"contain"</code> oder explizite Breiten- und Höhenwerte (zum
          Beispiel, <code>"100px 200px"</code>).
        </p>
        <p>
        Wenn das Array enthält weniger Elemente als das <code>additional_backgrounds</code> Array, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_size</code> <code>["auto", "100px 100px"]</code> enthält, wird das dritte Hintergrundelement mit <code>"auto"</code>, das vierte mit <code>"100px 100px"</code> und das fünfte <code>"auto"</code> skaliert.
        </p>
        <p>Wenn nicht angegeben, ist die Standardeinstellung <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>backgrounds_area</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Bestimmt den Bereich des Browserfensters, in dem die Hintergrundbilder und Verläufe des Themes gezeichnet werden. Zu den Optionen gehören:
        </p>
        <ul>
          <li>
            <code>"auto"</code> – Firefox wählt den Bereich basierend auf
            <code>additional_backgrounds_alignment</code>. Wenn ein Ausrichtungswert einen Hintergrund in der vertikalen Mitte oder am unteren Rand des Headerbereichs positioniert, werden die Hintergründe in den oberen Symbolleisten gezeichnet.
            Andernfalls werden sie im Fenster gezeichnet.
          </li>
          <li>
            <code>"window"</code> – die Hintergründe werden im gesamten
            Browserfenster gezeichnet, so dass sie sich hinter vertikalen Benutzeroberflächen erstrecken, wie die
            Seitenleiste und vertikale Tabs.
          </li>
          <li>
            <code>"top_toolbars"</code> – die Hintergründe werden nur in den
            horizontalen Symbolleisten oben im Fenster gezeichnet, das heißt, der Menüleiste,
            der Tableiste, der Navigationssymbolleiste und der Lesezeichensymbolleiste. Vertikale
            Benutzeroberflächen, wie die Seitenleiste, verwenden stattdessen die <code>frame</code> Farbe.
          </li>
        </ul>
        <p>Wenn nicht angegeben, ist die Standardeinstellung <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>color_scheme</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Bestimmt, welches Farbschema auf das Chrome (zum Beispiel, Kontextmenüs)
          und den Inhalt (zum Beispiel, eingebettete Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird.
          Zu den Optionen gehören:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Theme gewählt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist die Standardeinstellung <code>"auto"</code>.</p>
      </td>
    </tr>
    <tr>
      <td><code>content_color_scheme</code></td>
      <td>
        <p><code>String</code></p>
      </td>
      <td>
        <p>Optional</p>
        <p>
          Bestimmt, welches Farbschema auf den Inhalt (zum Beispiel, eingebettete Seiten und
          bevorzugtes Farbschema für Webseiten) angewendet wird. Überschreibt <code>color_scheme</code>. Zu den Optionen
          gehören:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Theme gewählt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist die Standardeinstellung <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein grundlegendes Thema muss ein Bild definieren, das dem Header hinzugefügt wird, die Akzentfarbe, die im Header verwendet wird, und die Textfarbe, die im Header verwendet wird:

```json
 "theme": {
   "images": {
     "theme_frame": "images/sun.jpg"
   },
   "colors": {
     "frame": "#CF723F",
     "tab_background_text": "black"
   }
 }
```

Mehrere Elemente können verwendet werden, um den Header zu füllen. Vor Firefox Version 60 verwenden Sie ein leeres oder transparentes Header-Bild, um die Platzierung jedes zusätzlichen Elements zu steuern:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/left.png", "images/middle.png", "images/right.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "left top", "top", "right top"]
   },
   "colors": {
     "frame": "blue",
     "tab_background_text": "white"
   }
 }
```

Sie können den Header auch mit einem wiederholten Bild oder Bildern füllen, in diesem Fall ein einzelnes Bild, das oben in der Mitte des Headers verankert ist und über den Rest des Headers wiederholt wird:

```json
 "theme": {
   "images": {
     "additional_backgrounds": [ "images/logo.png"]
   },
   "properties": {
     "additional_backgrounds_alignment": [ "top" ],
     "additional_backgrounds_tiling": [ "repeat"  ]
   },
   "colors": {
     "frame": "green",
     "tab_background_text": "black"
   }
 }
```

Das folgende Beispiel verwendet die meisten der verschiedenen Werte für `theme.colors`:

```json
  "theme": {
    "images": {
      "theme_frame": "weta.png"
    },

    "colors": {
       "frame": "darkgreen",
       "tab_background_text": "white",
       "toolbar": "blue",
       "bookmark_text": "cyan",
       "toolbar_field": "orange",
       "toolbar_field_border": "white",
       "toolbar_field_text": "green",
       "toolbar_top_separator": "red",
       "toolbar_bottom_separator": "white",
       "toolbar_vertical_separator": "white"
    }
  }
```

Es wird Ihnen einen Browser geben, der so aussieht:

![Ein Browserfenster mit zwei offenen Tabs und einem dunkelgrünen Hintergrund im Header-Bereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Toolbar haben einen blauen Hintergrund mit cyanfarbener Schrift. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rahmen, eine grüne Schriftfarbe und einen weißfarbenen vertikalen Linienseparator. Eine rote Linie wird verwendet, um die Tabs oben zu trennen, und eine weiße Linie, um die Tabs vom darunterliegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Mode-Symbol von den anderen Symbolen trennt.

Dieses Beispiel (Firefox 153+) mischt Bildhintergründe mit einem CSS linear gradient:

```json
"theme": {
  "images": {
    "additional_backgrounds": [
      "background-image1.svg",
      "background-image2.svg",
      { "linear-gradient": "to bottom, #FF6BBA -20%, #FFC999 50%" }
    ]
  },
  "properties": {
    "additional_backgrounds_alignment": ["right top", "left top", "right top"],
    "additional_backgrounds_tiling": ["no-repeat", "no-repeat", "repeat-x"],
    "additional_backgrounds_size": ["auto", "auto", "auto 144px"]
  }
}
```

Dies führt zu:

- `background-image1.svg` wird oben rechts in seiner natürlichen Größe angezeigt.
- `background-image2.svg` wird oben links in seiner natürlichen Größe angezeigt.
- Der `linear-gradient` wird von oben rechts aus, horizontal über den Header gekachelt (`repeat-x`), und auf 144px Höhe skaliert (Breite ist automatisch). Der Gradient wechselt von Pink (`#FF6BBA`) oben zu Pfirsich (`#FFC999`) unten.

Dieses Beispiel (Firefox 156+) beschränkt den Hintergrundgradienten auf die horizontalen Toolbars am oberen Rand des Fensters, sodass er sich nicht hinter die Seitenleiste oder vertikale Tabs erstreckt. Ohne `backgrounds_area` bewirkt die `"right top"`-Ausrichtung, dass Firefox den Gradient auf das gesamte Fenster zeichnet:

```json
"theme": {
  "images": {
    "additional_backgrounds": [
      { "linear-gradient": "to bottom, rgb(255, 0, 128), rgb(0, 128, 255)" }
    ]
  },
  "colors": {
    "frame": "#000080",
    "tab_background_text": "#ffffff"
  },
  "properties": {
    "additional_backgrounds_alignment": ["right top"],
    "additional_backgrounds_tiling": ["no-repeat"],
    "additional_backgrounds_size": ["100% 100%"],
    "backgrounds_area": "top_toolbars"
  }
}
```

Mit `backgrounds_area` auf `"top_toolbars"` gesetzt, verwendet die Seitenleiste die `frame`-Farbe. Wenn `backgrounds_area` auf `"window"` geändert wird, wird der Gradient über das gesamte Fenster gezeichnet, einschließlich hinter der Seitenleiste.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild oben links im Header und wenn das Bild den Header-Bereich nicht ausfüllt, wird das Bild gekachelt.
- Alle Farben müssen als ein Array von RGB-Werten angegeben werden, wie folgt:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farbform für alle Eigenschaften akzeptiert. Davor erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbform erforderten.
