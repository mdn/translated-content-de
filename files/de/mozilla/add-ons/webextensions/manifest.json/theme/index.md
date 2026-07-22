---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 3b763f8f076c053b7a44e261c3a19a1879bc11ff
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

Verwenden Sie den `theme`-Schlüssel, um ein statisches Thema für Firefox zu definieren. Wenn es alleine angegeben wird, definiert es das Thema, das verwendet wird, wenn Firefox entweder das helle oder dunkle Farbschema verwendet. Wenn der [`dark_theme`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) angegeben wird, bietet dieser Schlüssel das Thema, das verwendet wird, wenn Firefox das helle Farbschema verwendet.

> [!NOTE]
> Wenn Sie ein Thema mit einer Erweiterung einschließen möchten, sehen Sie bitte die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, um installiert werden zu können ([Firefox Bug 1545109](https://bugzil.la/1545109)). Weitere Informationen finden Sie unter [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

## Bildformate

Die folgenden Bildformate werden in allen Themenbildeigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animiertes GIF wird nicht unterstützt)

## Syntax

Der `theme`-Schlüssel ist ein Objekt, das die folgenden Eigenschaften aufnimmt:

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
        <p>Optional ab Firefox 60. Vor Firefox 60 erforderlich.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Bilder darstellen, die in
          verschiedenen Teilen des Browsers angezeigt werden sollen. Siehe
          <code><a href="#images">images</a></code> für Details zu den
          Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend</p>
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
          <code>"additional_backgrounds"</code>-Elemente angezeigt und Farbpaletten angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur manifest.json-Datei und können keine externe URL referenzieren.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie den Kopfbereich immer vertikal ausfüllen.

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
          Ein Vordergrundbild (definiert durch den Pfad zu einer im Add-on enthaltenen Bilddatei) oder ein <a href="#css_gradient_syntax">CSS-Gradient</a>
          zum Hinzufügen zum Kopfbereich, verankert an der oberen rechten Ecke
          des Kopfbereichs. CSS-Gradienten werden ab Firefox 153 unterstützt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild oben links im
            Kopfbereich und wenn das Bild den Kopfbereich nicht ausfüllt, wird es gekachelt.
          </p>
        </div>
        <p>
          Optional im Desktop Firefox 60 und später.
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
            <code>additional_backgrounds</code>-Eigenschaft ist experimentell. Sie wird
            in Freigabeversionen von Firefox akzeptiert, ihr Verhalten kann sich jedoch
            ändern.
          </p>
        </div>
        <p>
          Ein Array zusätzlicher Hintergrundelemente, die jeweils entweder der Pfad zu einer im Add-on enthaltenen Bilddatei oder ein <a href="#css_gradient_syntax">CSS-Gradient</a> sein können, der zum
          Kopfbereich hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Element angezeigt wird. Diese zusätzlichen Hintergrundelemente schichten das erste Element im
          Array oben und das letzte Element unten. CSS-Gradienten werden
          ab Firefox 153 unterstützt.
        </p>
        <p>Optional</p>
        <p>
          Standardmäßig sind alle Elemente an der oberen rechten Ecke des
          Kopfbereichs verankert, aber ihre Ausrichtung, Wiederholung und Größenverhalten können
          durch <a href="#properties"><code>"properties":</code></a> gesteuert werden.
        </p>
        <p>
          Da zusätzliche Hintergrundelemente hinter dem <code>theme_frame</code>-Element angezeigt werden, werden zusätzliche Hintergrundelemente versteckt, wenn <code>theme_frame</code> als CSS-Gradient festgelegt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### CSS-Gradient-Syntax

Ein CSS-Gradient wird als Objekt in der Form `{ "GRADIENT_TYPE": "GRADIENT_PARAMS" }` angegeben, wobei:

- `GRADIENT_TYPE` eines der folgenden ist:
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
            alt="Übersicht über die Farbeigenschaften und wie sie auf die Firefox-Benutzeroberfläche angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn ein Element von mehreren Farbeigenschaften beeinflusst wird, sind die Eigenschaften nach Priorität aufgelistet.

Alle diese Eigenschaften können entweder als String angegeben werden, der einen beliebigen gültigen [CSS-Farbstring](/de/docs/Web/CSS/Reference/Values/color_value) (einschließlich hexadezimal) enthält, oder als RGB-Array, wie etwa `"tab_background_text": [ 107 , 99 , 23 ]`.

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
          Die Farbe von Text und Symbolen in der Lesezeichen- und Suchleiste. Auch, wenn
          <code>tab_text</code> nicht definiert ist, wird die Farbe des aktiven
          Tab-Textes und wenn <code>icons</code> nicht definiert ist, die Farbe der
          Symbolleiste-Symbole festgelegt. Wird als Chrome-kompatibles Alias für
          <code>toolbar_text</code> bereitgestellt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut mit
            den in <code>frame</code> und <code>frame_inactive</code> oder
            <code>toolbar</code> verwendeten Farben kontrastiert, wenn Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, stellen Sie auch sicher, dass ein guter Kontrast
            zu <code>button_background_active</code> und
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
            alt="Browser Firefox ist schwarz. Der Tab des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die Suchleiste sind weiß mit schwarzem Text, aber alle Symbolleiten- und Suchleisten-Icons sind rot."
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol für die Symbolleiste im URL-Bereich ist weiß mit rotem Hintergrund und wird gedrückt. Ein Popup wird angezeigt, das eine kurze Liste von Elementen enthält, die zur Symbolleiste hinzugefügt werden können, wie die Bibliothek des Browsers und die Seitenleisten." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe der Symbolleistenschaltflächen bei Hover.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Zurück-Symbol ist weiß mit einem roten Kreis-Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, mit Ausnahme derjenigen in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das URL-Leisten- und Neues-Tab-Icons sind rot. Die roten Symbole kontrastieren gut mit dem schwarzen Hintergrund des Kopfbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Symbolleistensymbole im Aufmerksamkeitsmodus, wie das mit Stern markierte
          Lesezeichen-Symbol oder das Fertig-Download-Symbol.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind grau mit weißem Text. Das Bookmark-this-Page-Symbol ist rot und gedrückt, ein geöffnetes Popup mit Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt. Während im Aufmerksamkeitszustand die Symbolleistensymbole gut mit dem schwarzen Hintergrund des Kopfbereichs kontrastieren." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds im Kopfbereich, angezeigt in dem Teil des
          Kopfbereichs, der nicht von den in
          <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Elementen bedeckt oder sichtbar ist.
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
        <p><img alt="Browser Firefox ist rot mit weißem Text. Die Tabs des Browsers sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text" src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds im Kopfbereich, wenn das Browserfenster
          inaktiv ist. Wird in dem Teil des Kopfbereichs angezeigt, der nicht von den in <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Elementen bedeckt oder sichtbar ist.
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
            alt="Browser Firefox ist grau. Die Tabs und die URL-Leiste des Browsers sind heller grau. Der Tab-Text ist weiß und die URL-Leistensymbole sind dunkler grau."
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Hintergrund der Suchleiste und der Schnellzugriffsschaltflächen rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe auf der neuen Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>ntp_background</code> und <code>ntp_card_background</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Text rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Pop-ups (wie das Dropdown-Menü der URL-Leiste und die
          Pfeilfenster).
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Seite als Lesezeichen markieren' ist blau und gedrückt, ein geöffnetes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt, und der Hintergrund ist rot. Die Hintergrundfarbe des Pop-ups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Rahmenfarbe von Pop-ups.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Seite als Lesezeichen markieren' ist blau und gedrückt, ein geöffnetes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt, und der Rand ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die mit der Tastatur in Pop-ups hervorgehoben sind
          (wie dem ausgewählten Element im Dropdown-Menü der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen, <code>popup_highlight_text</code> zu definieren, um die Standardfarbe des Browsers auf verschiedenen Plattformen zu überschreiben.
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
        <p><img alt="Ein Screenshot von Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Pop-up-Fenster mit Suchergebnissen wird angezeigt, mit einem hervorgehobenen Element, dessen Hintergrund rot ist. Die Hintergrundfarbe des hervorgehobenen Elements im Pop-up ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe der in Pop-ups hervorgehobenen Elemente.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt, mit einem hervorgehobenen Element, dessen Text rot ist und einen schwarzen Hintergrund hat. Die Textfarbe des hervorgehobenen Elements kontrastiert gut mit der schwarzen Hintergrundfarbe dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Pop-ups.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt, dessen Texte rot sind. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Pop-ups." src="popup_text.png" /></p>
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
        <p><img alt="Ein Nahaufnahme-Screenshot der geöffneten Seitenleiste eines Browserfensters. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rahmen- und Trennlinie der Browser-Seitenleiste</p>
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
        <p><img alt="Ein Nahaufnahme der Lesezeichen-Seitenleiste im Firefox-Browser mit einem roten horizontalen Trennstrich zwischen dem Titel der Seitenleiste und dem Menü der Seitenleiste. Die Rahmen- und Trennlinienfarbe der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe hervorgehobener Zeilen in den eingebauten Seitenleisten</p>
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
        <p><img alt="Ein Nahaufnahme der Lesezeichen-Seitenleiste im Firefox-Browser mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe hervorgehobener Zeilen in den Seitenleisten.</p>
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
        <p><img alt="Ein Nahaufnahme der Lesezeichen-Seitenleiste im Firefox-Browser mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der rosa Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
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
        <p><img alt="Ein Nahaufnahme-Screenshot der geöffneten Seitenleiste eines Browserfensters. Die Farbe des Textes in der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code> wird
            ab Firefox 89 nicht mehr unterstützt.
          </p>
        </div>
        <p>Die Farbe des vertikalen Trenners der Hintergrund-Tabs.</p>
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
            alt="Ein Nahaufnahme der Browsing-Tabs zur Hervorhebung des Trenners."
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
          <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist,
          gilt dies für den Text im aktiven Tab.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>tab_selected</code> oder <code>frame</code> und
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
        <p>Die Farbe der Linie im ausgewählten Tab.</p>
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
        <p>Die Farbe des Ladeindikators und des Ladebursts im Tab.</p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in weiß. Im ausgewählten Tab ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in weiß. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 repräsentiert es die Textfarbe für den ausgewählten Tab. Wenn
          <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der
          ausgewählten Tab-Linie.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            denen in <code>tab_selected</code> oder <code>frame</code> und
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
        <p><img alt="Browser Firefox hat ein Insektenthema. Die URL-Leiste ist heller grau mit weißen Symbolen. Der ausgewählte Tab-Text ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und den
          ausgewählten Tab.
        </p>
        <p>Dies legt auch die Hintergrundfarbe der "Find"-Leiste fest.</p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste im Browser sind rot mit weißem Text und Symbolen, außer in der Suchleiste, wo Text und Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Teil der Symbolleiste von
          der Region darunter trennt.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste im Browser sind dunkler grau mit weißem Text und Symbolen. Eine horizontale rote Linie trennt den unteren Teil der Symbolleiste vom Beginn der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
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
          <strong>Suchfeldes</strong> fest.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste im Browser sind heller grau mit weißen Symbolen und Text. Die Hintergrundfarbe der URL-Leiste ist rot. Die Suchleiste ist weiß mit schwarzem Text. Das Suchfeld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Symbolleiste.</p>
        <p>
          Dies legt auch die Rahmenfarbe des
          <strong>Suchfeldes</strong> fest.
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste im Browser sind schwarz mit weißen Symbolen und Text. Die URL-Leiste und die Suchfeld sind rot umrandet." src="toolbar-field-border.png" /></p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs und die URL-Leiste im Browser sind schwarz mit weißen Symbolen und Text. Die URL-Leiste ist fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
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
        <p><img alt="Browser Firefox ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste im Browser sind schwarz mit weißen Symbolen und Text. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die die aktuelle Textauswahl
        in der URL-Leiste (und der Suchleiste, wenn konfiguriert) kennzeichnet.
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
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit Texten und Symbolen in schwarz. Der URL-Leistenbereich ist fokussiert und blau umrandet, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das <code>toolbar_field_highlight</code>-Feld an, dass
          die Hervorhebungsfarbe hellgrün ist, während der Text ist auf einen
          mittel-dunklen Grün gesetzt mit <code>toolbar_field_highlight_text</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um den aktuell ausgewählten Text in der URL-Leiste
          (und der Suchleiste, wenn sie als separates Feld konfiguriert ist) darzustellen.
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
            alt="Browser Firefox ist weiß. Die Tabs und die URL-Leiste des Browsers sind weiß mit Texten und Symbolen in schwarz. Der URL-Leistenbereich ist fokussiert und blau umrandet, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das <code>toolbar_field_highlight_text</code>-Feld verwendet, um die Textfarbe auf ein dunkles mittleres Grün zu setzen, während die Hervorhebungsfarbe hellgrün ist.
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
          Die Farbe der Trennlinien innerhalb der URL-Leiste. In Firefox 58
          wurde dies als <code>toolbar_vertical_separator</code> implementiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Browser Firefox ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit Texten und Symbolen in weiß. Innerhalb des weißen URL-Leistenbereichs, nach dem Leseansichts-Symbol, eine rote vertikale Linie, die den Rest der URL-Leistensymbole trennt. Die Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die
          rote vertikale Linie in der URL-Leiste, die das Leseansichts-Symbol von
          den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Symbolleiste, wie der URL-Leiste. Dies
          setzt auch die Farbe des Textes im
          <strong>Suchfeld</strong> fest.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Der Text innerhalb der URL-Leiste ist rot. Die Symbole und das Suchfeld haben roten Text auf schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die URL-Leiste hat den Fokus; der Text und die Symbole der Leiste sind rot auf schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Toolbar-Textes. Dies setzt auch die Farbe des Textes in der
          "Find"-Leiste fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Zur Kompatibilität mit Chrome verwenden Sie das Alias
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs, die Suchleiste und die URL-Leiste im Browser sind schwarz mit rotem Text und Symbolen. Der Text innerhalb des aktiven Tabs, der Navigationsleiste und der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die die obere Seite der Symbolleiste von der
          Region darüber trennt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Eine rote Linie trennt die Oberseite der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Trenners in der Lesezeichen-Symbolleiste. In Firefox 58 entspricht dies der Farbe der Trennlinien in der URL-Leiste.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Die Farbe der vertikalen Linie, die die Lesezeichen-Symbolleiste von dem Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
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
        Enthält das Array weniger Elemente als das <code>additional_backgrounds</code>-Array, wird das Array für die fehlenden Werte wiederverwendet. Wenn beispielsweise <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_alignment</code> <code>["left", "top"]</code> enthält, wird das dritte Hintergrundelement mit <code>"left"</code> ausgerichtet, das vierte mit <code>"top"</code> und das fünfte <code>"left"</code>.
        </p>
        <p>Wenn nicht angegeben, ist <code>"right top"</code> der Standardwert.</p>
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
          Ein Array von Enumerationswerten, die definieren, wie das entsprechende
          <code>"additional_backgrounds":</code>-Array-Element wiederholt wird. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
        Enthält das Array weniger Elemente als das <code>additional_backgrounds</code>-Array, wird das Array für die fehlenden Werte wiederverwendet. Wenn beispielsweise <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_tiling</code> <code>["no-repeat", "repeat-x"]</code> enthält, wird das dritte Hintergrundelement mit <code>"no-repeat"</code> gekachelt, das vierte mit <code>"repeat-x"</code> und das fünfte <code>"no-repeat"</code>.
        </p>
        <p>Wenn nicht angegeben, ist <code>"no-repeat"</code> der Standardwert.</p>
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
          <code>"additional_backgrounds":</code>-Array-Elements definieren. Akzeptiert die gleichen
          Werte wie die CSS
          <a href="/de/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a>-Eigenschaft, wie <code>"auto"</code>, <code>"cover"</code>,
          <code>"contain"</code> oder explizite Breiten- und Höhenwerte (zum Beispiel <code>"100px 200px"</code>).
        </p>
        <p>
        Enthält das Array weniger Elemente als das <code>additional_backgrounds</code>-Array, wird das Array für die fehlenden Werte wiederverwendet. Wenn beispielsweise <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_size</code> <code>["auto", "100px 100px"]</code> enthält, wird das dritte Hintergrundelement mit <code>"auto"</code> skaliert, das vierte mit <code>"100px 100px"</code> und das fünfte <code>"auto"</code>.
        </p>
        <p>Wenn nicht angegeben, ist <code>"auto"</code> der Standardwert.</p>
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
          Bestimmt, welches Farbschema auf das Chrome (z.B. Kontextmenüs)
          und den Inhalt (z.B. eingebaute Seiten und das bevorzugte Farbschema für Webseiten)
          angewendet wird. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend automatisch auf dem Thema.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist <code>"auto"</code> der Standardwert.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt angewendet wird (z.B. eingebaute Seiten und
          bevorzugtes Farbschema für Webseiten). Überschreibt <code>color_scheme</code>. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend automatisch auf dem Thema.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das System-Schema.</li>
        </ul>
        <p>Wenn nicht angegeben, ist <code>"auto"</code> der Standardwert.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Thema muss ein Bild definieren, das zum Kopfbereich hinzugefügt wird, die verwendete Akzentfarbe im Kopfbereich sowie die im Kopfbereich verwendete Textfarbe:

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

Mehrere Elemente können verwendet werden, um den Kopfbereich zu füllen. Vor Version 60 von Firefox, verwenden Sie ein leeres oder transparentes Header-Bild, um Kontrolle über die Platzierung jedes zusätzlichen Elements zu erhalten:

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

Sie können auch den Kopfbereich mit einem wiederholten Bild oder Bildern füllen, in diesem Fall ein einzelnes Bild, das in der Mitte oben im Kopfbereich verankert und über den restlichen Kopfbereich wiederholt wird:

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

Dies wird Ihnen einen Browser geben, der so aussieht:

![Ein Browserfenster mit zwei geöffneten Tabs und dunklem Grün als Hintergrundfarbe im Kopfbereich. Der inaktive Tab hat weiße Textfarbe. Der aktive Tab und die Symbolleiste haben eine blaue Hintergrundfarbe mit cyanfarbigem Text. Die URL-Leiste hat eine orange Hintergrundfarbe mit weißen Rändern, eine grüne Textfarbe und eine weiße vertikale Trennlinie. Eine rote Linie wird verwendet, um die Tabs oben zu trennen und eine weiße Linie, um die Tabs von den Inhalten darunter zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Leseansichts-Symbol von den anderen Symbolen trennt.

Dieses Beispiel (ab Firefox 153+) mischt Bildhintergründe mit einem CSS-Lineargradient:

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

Dies ergibt:

- `background-image1.svg` wird oben rechts mit seiner natürlichen Größe angezeigt.
- `background-image2.svg` wird oben links mit seiner natürlichen Größe angezeigt.
- Der `linear-gradient` wird von oben rechts ausgehend horizontal über den Kopfbereich gekachelt (`repeat-x`) und auf eine Höhe von 144px skaliert (Breite ist automatisch). Der Gradient wechselt von pink (`#FF6BBA`) oben zu pfirsichfarben (`#FFC999`) unten.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild oben links im Kopfbereich und wenn das Bild den Kopfbereich nicht ausfüllt, wird das Bild gekachelt.
- alle Farben müssen als Array von RGB-Werten angegeben werden, wie folgt:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farb-Form für alle Eigenschaften akzeptiert. Vorher mussten `colors/frame` und `colors/tab_background_text` die Array-Form verwenden, während andere Eigenschaften die CSS-Farb-Form erforderten.
