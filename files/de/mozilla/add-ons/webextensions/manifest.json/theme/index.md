---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: f49f1d49a7ea045dd1365834d8931721894c1aaf
---

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Pflicht</th>
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

Verwenden Sie den `theme` Schlüssel, um ein statisches Theme zu definieren, das in Firefox angewendet werden soll. Wenn es alleine bereitgestellt wird, definiert es das Theme, das verwendet wird, wenn Firefox entweder das helle oder dunkle Farbschema verwendet. Wenn der [`dark_theme` Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) bereitgestellt wird, bietet dieser Schlüssel das Theme, das verwendet wird, wenn Firefox das helle Farbschema verwendet.

> [!NOTE]
> Wenn Sie ein Theme mit einer Erweiterung einbinden möchten, beachten Sie bitte die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert werden, um installiert zu werden ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Weitere Details finden Sie unter [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bildeigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animierte SVG werden ab Firefox 59 unterstützt)
- GIF (animierte GIFs werden nicht unterstützt)

## Syntax

Der Theme-Schlüssel ist ein Objekt, das die folgenden Eigenschaften enthält:

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
        <p>Optional ab Firefox 60. Pflicht vor Firefox 60.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Bilder darstellen, die in
          verschiedenen Teilen des Browsers angezeigt werden. Siehe
          <code><a href="#images">images</a></code> für Details zu den
          Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Pflicht</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben verschiedener Teile
          des Browsers darstellen. Siehe <code><a href="#colors">colors</a></code> für
          Details zu den Eigenschaften, die dieses Objekt enthalten kann.
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
          <code>"additional_backgrounds"</code>-Elemente angezeigt und Farbschemata
          angewendet werden. Siehe <code><a href="#properties">properties</a></code>
          für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur manifest.json-Datei und können keine externe URL referenzieren.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie immer den Header-Bereich vertikal ausfüllen.

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
      <td><code>String</code> or <code>Object</code></td>
      <td>
        <p>
          Ein Vordergrundbild (definiert durch den Pfad zu einem im Add-on gepackten Bild) oder <a href="#css_gradient_syntax">CSS-Gradient</a>,
          das dem Header-Bereich hinzugefügt wird und an der oberen rechten Ecke
          des Header-Bereichs verankert ist. CSS-Gradienten werden ab Firefox 153 unterstützt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> In Chrome wird das Bild am oberen linken Rand
            des Headers verankert und, wenn das Bild den Header-Bereich nicht ausfüllt, das
            Bild gekachelt.
          </p>
        </div>
        <p>
          Optional in Desktop-Firefox ab Version 60.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> of <code>String</code> or <code>Object</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die
            <code>additional_backgrounds</code>-Eigenschaft ist experimentell. Sie wird
            in stabilen Versionen von Firefox akzeptiert, aber ihr Verhalten
            kann sich ändern.
          </p>
        </div>
        <p>
          Ein Array zusätzlicher Hintergrundelemente, die jeweils entweder der Pfad zu einem im Add-on gepackten Bild oder ein <a href="#css_gradient_syntax">CSS-Gradient</a> sind, die dem Header hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Element angezeigt werden. Diese zusätzlichen Hintergrundelemente schichten das erste Element im
          Array oben und das letzte unten. CSS-Gradienten werden ab Firefox 153 unterstützt.
        </p>
        <p>Optional</p>
        <p>
          Standardmäßig sind alle Elemente am oberen rechten Rand des
          Header-Bereichs verankert, aber ihre Ausrichtung, Wiederholung und Größenverhalten können
          über <a href="#properties"><code>"properties":</code></a> gesteuert werden.
        </p>
        <p>
          Da zusätzliche Hintergrundelemente hinter dem <code>theme_frame</code>-Element angezeigt werden, sind zusätzliche Hintergrundelemente unsichtbar, wenn <code>theme_frame</code> als CSS-Gradient festgelegt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### CSS-Gradient-Syntax

Ein CSS-Gradient wird als ein Objekt in der Form `{ "GRADIENT_TYPE": "GRADIENT_PARAMS" }` angegeben, wobei:

- `GRADIENT_TYPE` eine der folgenden ist:
  - `linear-gradient`
  - `radial-gradient`
  - `conic-gradient`
  - `repeating-linear-gradient`
  - `repeating-radial-gradient`
  - `repeating-conic-gradient`
- `GRADIENT_PARAMS` die Parameter für die CSS-Gradient-Funktion enthält, wie in [CSS-Gradient-Werte](/de/docs/Web/CSS/Reference/Values/gradient) beschrieben.

### colors

Diese Eigenschaften definieren die Farben, die für verschiedene Teile des Browsers verwendet werden. Sie sind alle optional. Wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht der Farbeigenschaften und ihrer Anwendung auf Firefox-UI-Komponenten"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wo ein Bestandteil von mehreren Farbeigenschaften beeinflusst wird, sind die Eigenschaften in der Reihenfolge der Priorität aufgelistet.

Alle diese Eigenschaften können entweder als String mit einem gültigen [CSS-Farbstring](/de/docs/Web/CSS/Reference/Values/color_value) (einschließlich Hexadezimal) oder als RGB-Array angegeben werden, wie beispielsweise `"tab_background_text": [ 107 , 99 , 23 ]`.

> [!NOTE]
> [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).

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
          Die Farbe von Text und Symbolen in den Lesezeichen- und Suchleisten. Außerdem setzt es, wenn <code>tab_text</code> nicht definiert ist, die Farbe des Textes des aktiven Tabs und, wenn <code>icons</code> nicht definiert ist, die Farbe der Symbolleiste. Bereitgestellt als Chrome-kompatibler Alias für <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe einen guten Kontrast zu den in <code>frame</code> und <code>frame_inactive</code> oder <code>toolbar</code>, wenn Sie diese Eigenschaft verwenden, genutzten Farben bietet.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, auch einen guten Kontrast mit <code>button_background_active</code> und <code>button_background_hover</code> sicherstellen.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
            alt="Browser Firefox ist schwarz. Der Tab des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die Seite-Suchleiste sind weiß mit schwarzem Text, aber alle Symbole des Browsers und der Seite-Suchleiste sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der gedrückten Symbolleistenschaltflächen.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol zum Anpassen der Toolbar in der URL-Leiste in weiß mit einem roten Hintergrund ist gedrückt und ein Popup ist geöffnet, das eine kurze Liste von Elementen zum Hinzufügen zur Toolbar anzeigt, wie zum Beispiel die Bibliothek des Browsers und die Seitenleisten." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der Symbolleistenschaltflächen beim Überfahren mit der Maus.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Zurückgehen-Icon ist weiß mit einem roten Kreis als Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, abgesehen von denen in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu denen bietet, die in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> genutzt werden.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Die Symbole der URL-Leiste und das neue Tab öffnen sind rot. Die roten Symbole kontrastieren gut mit der schwarzen Hintergrundfarbe des Headerbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe von Symbolleistensymbolen im Aufmerksamkeit-Zustand wie das Sternchensymbol im
          Lesezeichen oder das Symbol für abgeschlossene Downloads.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu denen bietet, die in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> genutzt werden.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Seiten-Lesezeichen ist rot und gedrückt, ein geöffnetes Popup-Fenster namens 'Bearbeiten dieses Lesezeichens' wird angezeigt. Im Aufmerksamkeit-Zustand kontrastieren die Toolbarsymbole gut mit dem schwarzen Hintergrund des Header-Bereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Kopfbereichs, angezeigt in dem Teil des
          Headers, der nicht von den in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Elementen bedeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "frame": "red",
     "tab_background_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Browser Firefox ist rot mit weißem Text. Die Tabs des Browsers sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text" src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Kopfbereichs, wenn das Browserfenster
          inaktiv ist, angezeigt in dem Teil des Headers, der nicht von den in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Elementen bedeckt oder sichtbar ist.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
            alt="Browser Firefox ist grau. Die Tabs und die URL-Leiste des Browsers sind heller grau. Der Tab-Text ist weiß und die Symbole der URL-Leiste sind dunkler grau."
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
          <summary>Beispiel ansehen</summary>
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
        <p>Die Hintergrundfarbe der Karte auf der neuen Tab-Seite.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_card_background": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Auf der Seite ist der Hintergrund des Suchbalkens und der Schnellzugriffstasten rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu denen hat, die in <code>ntp_background</code> und <code>ntp_card_background</code> genutzt werden.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "ntp_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Auf der Seite ist der Text in Rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie das Dropdown der URL-Leiste und die Pfeiltasten-Panel).
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in Weiß. Das Symbol 'Diese Seite mit Lesezeichen versehen' ist blau und gedrückt, ein geöffnetes Popup namens 'Dieses Lesezeichen bearbeiten' wird mit rotem Hintergrund angezeigt. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Popups.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in Weiß. Das Symbol 'Diese Seite mit Lesezeichen versehen' ist blau und gedrückt, ein geöffnetes Popup namens 'Dieses Lesezeichen bearbeiten' wird mit einem roten Umriss und schwarzem Hintergrund angezeigt. Der Rahmen des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von mit der Tastatur markierten Elementen in Popups (wie das ausgewählte Dropdown-Element der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen, <code>popup_highlight_text</code> zu definieren, um die standardmäßige Textfarbe des Browsers auf verschiedenen Plattformen zu überschreiben.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Screenshot von Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in Weiß. Ein Suchergebnisse-Popup wird angezeigt, wobei der Hintergrund eines markierten Elements rot ist. Die Hintergrundfarbe des markierten Elements im Popup ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von markierten Elementen in Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>popup_highlight</code> genutzten hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in Weiß. Ein Suchergebnisse-Popup wird angezeigt, wobei der Text eines markierten Elements rot mit schwarzem Hintergrund ist. Die Textfarbe des markierten Elements kontrastiert gut mit der schwarzen Hintergrundfarbe dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>popup</code> genutzten hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in Weiß. Ein Suchergebnisse-Popup wird angezeigt, wobei die Texte der Elemente rot sind. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar</code></td>
      <td>
        <p>Die Hintergrundfarbe der Seitenleiste.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Nahaufnahme-Screenshot eines geöffneten Browserfensters mit einer Seitenleiste. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rahmen- und Trennlinienfarbe der Browsersidebar</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_border": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichenseitenleiste mit einer roten horizontalen Trennlinie zwischen dem Seitentitel und dem Seitenleistenmenü. Die Rahmen- und Trennlinienfarbe der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe der hervorgehobenen Zeilen in integrierten Seitenleisten</p>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
     "sidebar_highlight": "red",
     "sidebar_highlight_text": "white"
  }
}</pre
          >
        </details>
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichenseitenleiste mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe der hervorgehobenen Zeilen in den Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>sidebar_highlight</code> genutzten hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
          <pre class="brush: json">
"theme": {
  "colors": {
    "sidebar_highlight": "pink",
    "sidebar_highlight_text": "red",
  }
}</pre
          >
        </details>
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichenseitenleiste mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der rosa Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>sidebar</code> genutzten hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Nahaufnahme-Screenshot eines geöffneten Browserfensters mit einer Seitenleiste. Die Farbe des Textes in der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code> wird ab Firefox 89 nicht unterstützt.
          </p>
        </div>
        <p>Die Farbe des vertikalen Trenners der Hintergrund-Tabs.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
            alt="Eine Nahaufnahme von Browser-Tabs zur Hervorhebung des Trennsymbol."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Seitentabs angezeigt wird. Wenn <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist, wird es auf den aktiven Tab-Text angewendet.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu denen bietet, die in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code>genutzt werden.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p>Die Farbe der ausgewählten Tab-Linie.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit heller grauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Ladeindikators und des Ladeeffekts im Tab.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in Weiß. Innerhalb des ausgewählten Tabs ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Beim Nichtverwenden wird die Farbe des ausgewählten Tabs durch <code>frame</code> und <code>frame_inactive</code> festgelegt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in Weiß. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 steht es für die Textfarbe des ausgewählten Tabs. Wenn <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der ausgewählten Tab-Linie.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu denen bietet, die in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> genutzt werden.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox hat ein Insekten-Theme. Die Suchleiste ist hellgrau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und den ausgewählten Tab.
        </p>
        <p>Dies setzt auch die Hintergrundfarbe der "Finden"-Leiste fest.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tab-Leiste, die im Seitenbereich suchen und die URL-Leiste des Browsers sind rot mit weißem Text und Symbolen, außer für die im Seitenbereich suchen, wo der Text und das Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Rand der Symbolleiste von der darunter liegenden Region trennt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tab-Leiste und die URL-Leiste des Browsers sind heller grau mit weißem Text und Symbolen. Eine horizontale rote Linie trennt den unteren Rand der Symbolleiste und den Anfang der Darstellung der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Symbolleiste, wie die URL-Leiste.
        </p>
        <p>
          Dies setzt auch die Hintergrundfarbe des
          <strong>Im Seitenbereich finden</strong>-Feldes fest.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tab-Leiste, die im Seitenbereich suchen und die URL-Leiste des Browsers sind heller grau mit weißem Text und Symbolen. Die Hintergrundfarbe der URL-Leiste ist rot. Die im Seitenbereich suchen ist weiß mit schwarzem Text. Das Im Seitenbereich finden-Feld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Symbolleiste.</p>
        <p>
          Dies setzt auch die Rahmenfarbe des
          <strong>Im Seitenbereich finden</strong>-Feldes fest.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tab-Leiste, im Seitenbereich suchen und URL-Leiste sind schwarz mit weißem Text und Symbolen. Die URL-Leiste und Im Seitenbereich finden-Felder sind rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die fokussierte Rahmenfarbe für Felder in der Symbolleiste.</p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tab-Leiste und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Die URL-Leiste ist fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die fokussierte Hintergrundfarbe für Felder in der Symbolleiste, wie die URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tab-Leiste, im Seitenbereich suchen und URL-Leiste sind schwarz mit weißem Text und Symbolen. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die zur Anzeige der aktuellen Textauswahl in der
        URL-Leiste (und der Suchleiste, falls es konfiguriert ist, dass sie separat ist) verwendet wird.
        <details open>
          <summary>Beispiel ansehen</summary>
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
            alt="Browser Firefox ist weiß. Die Tab-Leiste und die URL-Leiste sind weiß mit schwarzem Text und Symbolen. Die URL-Leiste ist fokussiert und blau umrandet, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das <code>toolbar_field_highlight</code>-Feld an, dass
          die Hervorhebungsfarbe ein helles Grün ist, während der Text auf ein
          mittel-dunkles Grün mit dem <code>toolbar_field_highlight_text</code> gesetzt ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die zum Zeichnen des aktuell ausgewählten Textes in der URL-Leiste
          (und der Suchleiste, falls es konfiguriert ist, dass sie separat ist) verwendet wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>toolbar_field_highlight</code> genutzten hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
            alt="Browser Firefox ist weiß. Die Tab-Leiste und die URL-Leiste sind weiß mit schwarzem Text und Symbolen. Die URL-Leiste ist fokussiert und blau umrandet, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das <code>toolbar_field_highlight_text</code>-Feld verwendet, um
          die Textfarbe auf ein mittel-dunkles Grün zu setzen, während die
          Hervorhebungsfarbe ein helles Grün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code> wird ab Firefox 89 nicht unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Separatoren in der URL-Leiste. In Firefox 58 wurde dies
          als <code>toolbar_vertical_separator</code> implementiert.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser Firefox ist schwarz. Die Tab-Leiste und die URL-Leiste sind schwarz mit Text und Symbolen in Weiß. Innerhalb der weißen URL-Leiste ist nach dem Reader-Modus-Symbol eine rote vertikale Linie, die den Rest der Symbole im URL-Leiste trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die
          rote vertikale Linie in der URL-Leiste, die das Reader-Modus-Symbol
          von den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Symbolleiste, wie der URL-Leiste. Diese
          setzt auch die Farbe des Textes im
          <strong>Im Seitenbereich finden</strong>-Feld fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>toolbar_field</code> genutzten hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tab-Leiste und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Der Text in der URL-Leiste ist rot. Die Symbole und das Im Seitenbereich finden-Feld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Symbolleiste, wie der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe einen guten Kontrast zu der in <code>toolbar_field_focus</code> genutzten hat.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Die Tab-Leiste und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in Weiß. Die URL-Leiste hat den Fokus; Text und Symbole der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in der Symbolleiste. Diese setzt auch die Farbe des Textes in der
          "Finden"-Leiste fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Für die Kompatibilität mit Chrome verwenden Sie den Alias
            <code>bookmark_text</code>.
          </p>
        </div>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tab-Leiste, das 'im Seitenbereich finden'-Fenster und die URL-Leiste sind schwarz mit rotem Text und Symbolen. Der Text im aktiven Tab, der Navigatorleiste und der Find Mitte Leiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Rand der Symbolleiste von der Region darüber trennt.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tab-Leiste und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Eine rote Linie trennt den oberen Rand der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Trennzeichens in der Lesezeichensymbolleiste. In Firefox 58
          entspricht es der Farbe der Trennzeichen in der URL-Leiste.
        </p>
        <details open>
          <summary>Beispiel ansehen</summary>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tab-Leiste und die URL-Leiste sind schwarz mit Text und Symbolen in Weiß. Die Farbe der vertikalen Linie, die die Symbolleiste für Lesezeichen vom Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese werden für die Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben ist und die Nicht-Alias-Version ebenfalls angegeben ist, wird der Wert von der Nicht-Alias-Version übernommen.

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
          entsprechenden <code>"additional_backgrounds":</code>-Array-Elements definieren.<br />Die
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
        Wenn das Array weniger Einträge als das <code>additional_backgrounds</code>-Array enthält, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_alignment</code> <code>["left", "top"]</code> enthält, wird das dritte Hintergrundelement mit <code>"left"</code> ausgerichtet, das vierte mit <code>"top"</code> und das fünfte mit <code>"left"</code>.
        </p>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"right top"</code>.</p>
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
          Ein Array von Enumerationswerten, die definieren, wie das
          entsprechende <code>"additional_backgrounds":</code>-Array-Element wiederholt wird. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
        Wenn das Array weniger Einträge als das <code>additional_backgrounds</code>-Array enthält, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_tiling</code> <code>["no-repeat", "repeat-x"]</code> enthält, wird das dritte Hintergrundelement mit <code>"no-repeat"</code> gekachelt, das vierte mit <code>"repeat-x"</code> und das fünfte mit <code>"no-repeat"</code>.
        </p>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"no-repeat"</code>.</p>
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
          <code>"additional_backgrounds":</code>-Array-Elements definieren. Akzeptiert dieselben
          Werte wie die CSS-
          <a href="/de/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a>
          -Eigenschaft, wie <code>"auto"</code>, <code>"cover"</code>,
          <code>"contain"</code> oder explizite Breiten- und Höhenwerte (zum
          Beispiel, <code>"100px 200px"</code>).
        </p>
        <p>
        Wenn das Array weniger Einträge als das <code>additional_backgrounds</code>-Array enthält, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_size</code> <code>["auto", "100px 100px"]</code> enthält, wird das dritte Hintergrundelement mit <code>"auto"</code> dimensioniert, das vierte mit <code>"100px 100px"</code> und das fünfte mit <code>"auto"</code>.
        </p>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf das Chrome (zum Beispiel Kontextmenüs) angewendet
          wird und die Inhalte (zum Beispiel integrierte Seiten und das bevorzugte Farbschema für Webseiten).
          Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend automatisch auf dem Thema.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – nutzt das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf die Inhalte (zum Beispiel integrierte Seiten und
          bevorzugtes Farbschema für Webseiten) angewendet wird. Überschreibt <code>color_scheme</code>. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend automatisch auf dem Thema.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist der Standardwert <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Theme muss ein Bild für den Header hinzufügen, die Akzentfarbe, die im Header verwendet wird, und die Farbe des Textes, der im Header verwendet wird, definieren:

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

Mehrere Elemente können verwendet werden, um den Header zu füllen. Vor der Firefox-Version 60 verwenden Sie ein leeres oder transparentes Headerbild, um die Platzierung jedes zusätzlichen Elements zu steuern:

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

Sie können auch den Header mit einem wiederholten Bild oder Bildern füllen, in diesem Fall mit einem einzelnen Bild, das in der Mitte des Headers verankert und über den Rest des Headers wiederholt wird:

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

Es wird Ihnen einen Browser bieten, der so aussieht:

![Ein Browserfenster mit zwei geöffneten Tabs und dunkler grüner Hintergrundfarbe im Kopfbereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Symbolleiste haben eine blaue Hintergrundfarbe mit cyanfarbigem Text. Die URL-Leiste hat einen orangenen Hintergrund mit weißen Rändern, eine grüne Textfarbe und eine weißfarbige vertikale Linienseparator. Eine rote Linie wird verwendet, um die Tabs oben zu trennen, und eine weiße Linie, um die Tabs vom Inhalt unterhalb zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Modus-Symbol von den anderen Symbolen trennt.

Dieses Beispiel (Firefox 153+) mischt Hintergrundbilder mit einem CSS-linearen Gradient:

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

Dies resultiert in:

- `background-image1.svg`, das oben rechts in seiner natürlichen Größe angezeigt wird.
- `background-image2.svg`, das oben links in seiner natürlichen Größe angezeigt wird.
- Der `linear-gradient`, der sich von oben rechts horizontal über den Header kachelt (`repeat-x`) und auf 144px in der Höhe dimensioniert ist (die Breite ist automatisch). Der Gradient wechselt von Pink (`#FF6BBA`) oben zu Pfirsich (`#FFC999`) unten.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild am oberen linken Rand des Headers, und wenn das Bild den Header-Bereich nicht ausfüllt, wird das Bild gekachelt.
- Alle Farben müssen als Array von RGB-Werten angegeben werden, wie folgt:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 werden sowohl das Array-Format als auch das CSS-Farbformat für alle Eigenschaften akzeptiert. Davor erforderten `colors/frame` und `colors/tab_background_text` das Array-Format, während für andere Eigenschaften das CSS-Farbformat erforderlich war.
