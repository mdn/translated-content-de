---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
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

Verwenden Sie den `theme`-Schlüssel, um ein statisches Theme zu definieren, das in Firefox angewendet wird. Wenn es allein bereitgestellt wird, definiert es das Theme, das verwendet wird, wenn Firefox entweder das helle oder das dunkle Farbschema verwendet. Wenn der [`dark_theme`-Schlüssel](/de/docs/Mozilla/Add-ons/WebExtensions/manifest.json/dark_theme) bereitgestellt wird, liefert dieser Schlüssel das Theme, das verwendet wird, wenn Firefox das helle Farbschema verwendet.

> [!NOTE]
> Wenn Sie ein Theme mit einer Erweiterung einfügen möchten, sehen Sie bitte die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert sein, um installiert werden zu können ([Firefox-Bug 1545109](https://bugzil.la/1545109)). Weitere Details finden Sie unter [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

## Bildformate

Folgende Bildformate werden in allen Theme-Bild-Eigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animiertes GIF wird nicht unterstützt)

## Syntax

Der Theme-Schlüssel ist ein Objekt, das folgende Eigenschaften annimmt:

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
          Ein JSON-Objekt, dessen Eigenschaften die im Browser anzuzeigenden Bilder darstellen. Weitere Informationen zu den Eigenschaften, die dieses Objekt enthalten kann, finden Sie unter
          <code><a href="#images">images</a></code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die Farben verschiedener Teile des Browsers darstellen. Weitere Informationen zu den Eigenschaften, die dieses Objekt enthalten kann, finden Sie unter <code><a href="#colors">colors</a></code>.
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
          <code>"additional_backgrounds"</code>-Elemente angezeigt werden und wie Farbschemata angewendet werden. Weitere Informationen zu den Eigenschaften, die dieses Objekt enthalten kann, finden Sie unter <code><a href="#properties">properties</a></code>.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur manifest.json-Datei und können keine externe URL referenzieren.

Bilder sollten 200 Pixel hoch sein, um sicherzustellen, dass sie den Headerbereich immer vertikal ausfüllen.

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
          Ein Vordergrundbild (definiert durch den Pfad zu einem in der Erweiterung verpackten Bildasset) oder <a href="#css_gradient_syntax">CSS-Verlauf</a>, das dem Headerbereich hinzugefügt und an der oberen rechten Ecke des Headerbereichs verankert wird. CSS-Verläufe werden ab Firefox 153 unterstützt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild an der oberen linken Ecke des Headers und kachelt das Bild, wenn es den Headerbereich nicht ausfüllt.
          </p>
        </div>
        <p>
          Optional in Desktop-Firefox ab Version 60.
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
            <code>additional_backgrounds</code>-Eigenschaft ist experimentell. Sie wird in Freigabeversionen von Firefox akzeptiert, aber ihr Verhalten kann sich ändern.
          </p>
        </div>
        <p>
          Ein Array von zusätzlichen Hintergrundelementen, die jeweils entweder der Pfad zu einem in der Erweiterung verpackten Bildasset oder <a href="#css_gradient_syntax">CSS-Verlauf</a> sind und dem Headerbereich hinzugefügt werden, hinter dem <code>"theme_frame":</code>-Element angezeigt werden. Diese zusätzlichen Hintergrundelemente schichten das erste Element im Array oben und das letzte Element unten. CSS-Verläufe werden ab Firefox 153 unterstützt.
        </p>
        <p>Optional</p>
        <p>
          Standardmäßig werden alle Elemente an der oberen rechten Ecke des Headerbereichs verankert, aber ihre Ausrichtung, Wiederholung und Größenverhalten können über <a href="#properties"><code>"properties":</code></a> kontrolliert werden.
        </p>
        <p>
          Da zusätzliche Hintergrundelemente hinter dem <code>theme_frame</code>-Element angezeigt werden, werden alle zusätzlichen Hintergrundelemente ausgeblendet, wenn <code>theme_frame</code> als CSS-Verlauf festgelegt ist.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### CSS-Verlaufssyntax

Ein CSS-Verlauf wird als Objekt in der Form `{ "GRADIENT_TYPE": "GRADIENT_PARAMS" }` angegeben, wobei:

- `GRADIENT_TYPE` eines der folgenden ist:
  - `linear-gradient`
  - `radial-gradient`
  - `conic-gradient`
  - `repeating-linear-gradient`
  - `repeating-radial-gradient`
  - `repeating-conic-gradient`
- `GRADIENT_PARAMS` die Parameter für diese CSS-Verlaufsfunktion enthält, wie in [CSS-Verlaufswerte](/de/docs/Web/CSS/Reference/Values/gradient) beschrieben.

### colors

Diese Eigenschaften definieren die Farben, die für verschiedene Bereiche des Browsers verwendet werden. Sie sind alle optional. Wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht der Farbeigenschaften und wie sie auf Firefox-UI-Komponenten angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wo ein Element von mehreren Farbeigenschaften betroffen ist, werden die Eigenschaften in der Reihenfolge ihrer Priorität aufgelistet.

Alle diese Eigenschaften können entweder als Zeichenfolge angegeben werden, die einen gültigen [CSS-Farbwert](/de/docs/Web/CSS/Reference/Values/color_value) (einschließlich Hexadezimalnotation) enthält, oder als RGB-Array, zum Beispiel `"tab_background_text": [ 107 , 99 , 23 ]`.

> [!NOTE]
> [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome_kompatibilität).

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
          Die Farbe von Text und Symbolen in den Lesezeichen- und Suchleisten. Außerdem, wenn <code>tab_text</code> nicht definiert ist, legt es die Farbe des aktiven Registerkartentextes und, wenn <code>icons</code> nicht definiert ist, die Farbe von Symbolen in der Symbolleiste fest. Bereitgestellt als Chrome-kompatibler Alias für <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe in gutem Kontrast zu den in <code>frame</code> und <code>frame_inactive</code> oder <code>toolbar</code> verwendeten Farben steht, wenn Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, stellen Sie auch sicher, dass ein guter Kontrast mit <code>button_background_active</code> und <code>button_background_hover</code> besteht.
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
            alt="Der Firefox-Browser ist schwarz. Die Registerkarte des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die Suchleiste sind weiß mit schwarzem Text, aber alle Symbole der Browser- und der Suchleiste sind rot."
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Symbolleiste anpassen' in der URL-Leiste mit einem weißen Icon und rotem Hintergrund ist gedrückt und ein Popup wird geöffnet, das eine kurze Liste von Dingen anzeigt, die zur Symbolleiste hinzugefügt werden können, wie die Bibliothek des Browsers und die Seitenleisten." src="theme-button_background_active.png" /></p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol, um eine Seite zurückzugehen, ist weiß mit einem roten Kreis als Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbole in der Symbolleiste, ausgenommen der in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten des Browsers und die URL-Leiste sind grau mit weißem Text. Die Symbole der URL-Leiste und das neue Registerkarten-Symbol sind rot. Die roten Symbole kontrastieren gut mit der schwarzen Hintergrundfarbe des Headerbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Aufmerksamkeitssymbole in der Symbolleiste, wie das Stern-Lesezeichensymbol oder das beendete Downloads-Symbol.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>frame</code>, <code>frame_inactive</code>, <code>button_background_active</code> und <code>button_background_hover</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Lesezeichen dieses Seiten-Symbol ist rot und gedrückt, ein geöffnetes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt. Während sich die Symbole in der Aufmerksamkeit befinden, kontrastieren sie gut mit dem schwarzen Hintergrund des Headerbereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Headerbereichs, sichtbar in dem Teil des Headers, der nicht von den in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> spezifizierten Elementen abgedeckt oder durchschaut wird.
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
        <p><img alt="Der Firefox-Browser ist rot mit weißem Text. Die Registerkarten des Browsers sind heller rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Headerbereichs, wenn das Browserfenster inaktiv ist, sichtbar in dem Teil des Headers, der nicht von den in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> spezifizierten Elementen abgedeckt oder durchschaut wird.
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
            alt="Der Firefox-Browser ist grau. Die Registerkarten und die URL-Leiste des Browsers sind heller grau. Der Tabtext ist weiß und das URL-Leistensymbol ist dunkler grau."
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Karten auf der neuen Tab-Seite.</p>
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Hintergrund der Suchleiste und der Schnellzugriff-Schaltflächen rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Tab-Seite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>ntp_background</code> und <code>ntp_card_background</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Text in rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie dem Dropdown-Menü der URL-Leiste und den Pfeil-Paneelen).
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Das Lesezeichen diese Seite-Symbol ist blau und gedrückt, ein geöffnetes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt, mit einem roten Hintergrund. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Randfarbe der Popups.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Das Lesezeichen diese Seite-Symbol ist blau und gedrückt, ein geöffnetes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird angezeigt mit einem roten Umriss und schwarzen Hintergrund. Der Rand des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von mit der Tastatur hervorgehobenen Elementen in Popups (wie das ausgewählte Element im Dropdown-Menü der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen <code>popup_highlight_text</code> zu definieren, um die standardmäßige Textfarbe des Browsers auf verschiedenen Plattformen zu überschreiben.
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
        <p> <img alt="Ein Screenshot von Firefox in Schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Suchergebnisse-Popup wird angezeigt mit einem hervorgehobenen Element, dessen Hintergrund rot ist. Die Hintergrundfarbe des hervorgehobenen Elements innerhalb des Popups ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>popup_highlight</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Suchergebnisse-Popup wird angezeigt mit einem hervorgehobenen Element, dessen Text rot mit einem schwarzen Hintergrund ist. Die Textfarbe des hervorgehobenen Elements kontrastiert gut mit der schwarzen Hintergrundfarbe des Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>popup</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit Symbolen und Text in weiß. Ein Suchergebnisse-Popup wird angezeigt mit Text in rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
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
        <p><img alt="Ein Nahaufnahme-Bild einer geöffneten Seitenleiste in einem Browserfenster. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Farbe des Rahmens und der Trennlinie der Browser-Seitenleiste</p>
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
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem roten horizontalen Trennzeichen zwischen dem Titel der Seitenleiste und dem Menü der Seitenleiste. Die Farbe des Rahmens und der Trennlinie der Seitenleiste ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe von hervorgehobenen Zeilen in integrierten Seitenleisten</p>
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
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Zeilen in Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>sidebar_highlight</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Eine Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der rosafarbenen Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe von Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>sidebar</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Ein Nahaufnahme-Bild einer geöffneten Seitenleiste in einem Browserfenster. Die Farbe des Textes in der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
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
        <p>Die Farbe des vertikalen Trennzeichens im Hintergrund der Registerkarten.</p>
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
            alt="Eine Nahaufnahme von Browser-Tabs, um das Trennzeichen hervorzuheben."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Registerkarten angezeigt wird. Wenn <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist, gilt für den aktiven Registerkartentext.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einer geöffneten Registerkarte. Der Browser ist schwarz. Die Registerkarten des Browsers und die URL-Leiste sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes in der offenen Registerkarte ist rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe der Registerkarte." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der Linie der ausgewählten Registerkarte.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit helleren grauen Symbolen und weißem Text. Die ausgewählte Registerkarte hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Ladeindikators der Registerkarte und des Ladeimpulses der Registerkarte.</p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einer geöffneten Registerkarte. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in weiß. Innerhalb der ausgewählten Registerkarte ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe der ausgewählten Registerkarte. Wenn es nicht verwendet wird, wird die Farbe der ausgewählten Registerkarte durch <code>frame</code> und <code>frame_inactive</code> festgelegt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einer geöffneten Registerkarte. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in weiß. Die ausgewählte Registerkarte hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 repräsentiert es die Textfarbe der ausgewählten Registerkarte. Wenn <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der Linie der ausgewählten Registerkarte.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit den in <code>tab_selected</code> oder <code>frame</code> und <code>frame_inactive</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Der Firefox-Browser hat ein Insekten-Thema. Die URL-Leiste ist heller grau mit weißen Symbolen. Der ausgewählte Registerkarten-Text ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und die ausgewählte Registerkarte.
        </p>
        <p>Dies legt auch die Hintergrundfarbe der "Suchen"-Leiste fest.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte, die Suchleiste des Browsers und die URL-Leiste sind rot mit weißem Text und Symbolen, mit Ausnahme der Suchleiste, in der der Text und das Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Rand der Symbolleiste von der darunterliegenden Region trennt.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind heller grau mit weißem Text und Symbolen. Eine horizontale rote Linie trennt den unteren Rand der Symbolleiste und den Anfang der Webseitenanzeige." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Symbolleiste, wie die URL-Leiste.
        </p>
        <p>
          Dies legt auch die Hintergrundfarbe des <strong>Suchen innerhalb der Seite</strong> Felds fest.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte, die Suchleiste und die URL-Leiste des Browsers sind heller grau mit weißen Texten und Symbolen. Die Hintergrundfarbe der URL-Leiste ist rot. Die Suchleiste ist weiß mit schwarzem Text. Das Suchfeld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Randfarbe für Felder in der Symbolleiste.</p>
        <p>
          Dies legt auch die Randfarbe des <strong>Suchen innerhalb der Seite</strong> Felds fest.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte, die Suchleiste und die URL-Leiste des Browsers sind schwarz mit weißen Texten und Symbolen. Die URL-Leiste und die Suchfelder sind rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die Randfarbe der markierten Felder in der Symbolleiste.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind schwarz mit weißen Texten und Symbolen. Das URL-Leistenfeld ist fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die Hintergrundfarbe der fokussierten Felder in der Symbolleiste, wie die URL-Leiste.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte, die Suchleiste und die URL-Leiste des Browsers sind schwarz mit weißen Texten und Symbolen. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe zur Hervorhebung der aktuellen Textauswahl in der URL-Leiste (und der Suchleiste, falls diese separat konfiguriert ist).
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
            alt="Der Firefox-Browser ist weiß. Die Registerkarte und die URL-Leiste des Browsers sind weiß mit Texten und Symbolen in schwarz. Das URL-Leistenfeld ist fokussiert und blau umrandet und der Text der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hierbei gibt das Feld <code>toolbar_field_highlight</code> an, dass die Hervorhebungsfarbe ein helles Grün ist, während der Text mit <code>toolbar_field_highlight_text</code> auf ein dunkel-mittleres Grün gesetzt wird.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe zum Zeichnen von Texten, die derzeit in der URL-Leiste ausgewählt sind (und der Suchleiste, falls diese als separate Box konfiguriert ist).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>toolbar_field_highlight</code> verwendeten Farbe kontrastiert.
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
            alt="Der Firefox-Browser ist weiß. Die Registerkarte und die URL-Leiste des Browsers sind weiß mit Texten und Symbolen in schwarz. Das URL-Leistenfeld ist fokussiert und blau umrandet und der Text der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hierbei wird das Feld <code>toolbar_field_highlight_text</code> verwendet, um die Textfarbe auf ein dunkel-mittleres Grün zu setzen, während die Hervorhebungsfarbe ein helles Grün ist.
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
          Die Farbe der Trennzeichen innerhalb der URL-Leiste. In Firefox 58 wurde dies als <code>toolbar_vertical_separator</code> implementiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einer offenen Registerkarte. Der Firefox-Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind schwarz mit Texten und Symbolen in weiß. Innerhalb des weißen URL-Leistenfeldes befindet sich nach dem Lesemodus-Symbol eine rote vertikale Linie, die den Rest der URL-Leistensymbole trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die rote vertikale Linie in der URL-Leiste, die das Lesemodus-Symbol von den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern der Symbolleiste, wie der URL-Leiste. Dies legt auch die Farbe des Textes im <strong>Suchen innerhalb der Seite</strong> Feld fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>toolbar_field</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einer offenen Registerkarte. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind schwarz mit weißen Texten und Symbolen. Der Text in der URL-Leiste ist rot. Die Symbole und das Suchfeld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern der Symbolleiste, wie der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit der in <code>toolbar_field_focus</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei offenen Registerkarten. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind schwarz mit Texten und Symbolen in weiß. Die URL-Leiste hat den Fokus; der Text und die Symbole der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in der Symbolleiste. Dies legt auch die Farbe des Textes in der "Suchen"-Leiste fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Für die Kompatibilität mit Chrome, verwenden Sie den Alias <code>bookmark_text</code>.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einer offenen Registerkarte. Der Browser ist schwarz. Die Registerkarte, die Suchleiste und die URL-Leiste des Browsers sind schwarz mit rotem Text und Symbolen. Der Text in der aktiven Registerkarte, der Navigationsleiste und der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Rand der Symbolleiste von dem Bereich darüber trennt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einer offenen Registerkarte. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind schwarz mit weißen Texten und Symbolen. Eine rote Linie trennt den oberen Teil der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Trennzeichens im Lesezeichentoolbar. In Firefox 58 entspricht dies der Farbe der Trennzeichen innerhalb der URL-Leiste.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einer offenen Registerkarte. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind schwarz mit Texten und Symbolen in weiß. Die Farbe der vertikalen Linie, die die Lesezeichentoolbar von dem Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliases

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese werden zur Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias gegeben ist und die Nicht-Alias-Version ebenfalls gegeben ist, wird der Wert von der Nicht-Alias-Version übernommen.

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
          Ein Array von Enumerationswerten, die die Ausrichtung des entsprechenden <code>"additional_backgrounds":</code> Array-Elements definieren.<br />Die Ausrichtungsoptionen umfassen:
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
        Wenn das Array weniger Elemente als das <code>additional_backgrounds</code>-Array enthält, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_alignment</code> <code>["left", "top"]</code> enthält, wird das dritte Hintergrundelement mit <code>"left"</code> ausgerichtet, das vierte mit <code>"top"</code>, und das fünfte mit <code>"left"</code>.
        </p>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"right top"</code> verwendet.</p>
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
          Ein Array von Enumerationswerten, die definieren, wie das entsprechende <code>"additional_backgrounds":</code> Array-Element wiederholt wird. Optionen umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>
        Wenn das Array weniger Elemente als das <code>additional_backgrounds</code>-Array enthält, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_tiling</code> <code>["no-repeat", "repeat-x"]</code> enthält, wird das dritte Hintergrundelement mit <code>"no-repeat"</code> gekachelt, das vierte mit <code>"repeat-x"</code>, und das fünfte mit <code>"no-repeat"</code>.
        </p>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"no-repeat"</code> verwendet.</p>
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
          Ein Array von Werten, die die Größe des entsprechenden <code>"additional_backgrounds":</code> Array-Elements definieren. Akzeptiert die gleichen Werte wie die CSS <a href="/de/docs/Web/CSS/Reference/Properties/background-size"><code>background-size</code></a> Eigenschaft, wie <code>"auto"</code>, <code>"cover"</code>, <code>"contain"</code> oder explizite Breiten- und Höhenangaben (beispielsweise, <code>"100px 200px"</code>).
        </p>
        <p>
        Wenn das Array weniger Elemente als das <code>additional_backgrounds</code>-Array enthält, wird das Array für die fehlenden Werte wiederverwendet. Zum Beispiel, wenn <code>additional_backgrounds</code> 5 Werte enthält und <code>additional_backgrounds_size</code> <code>["auto", "100px 100px"]</code> enthält, wird das dritte Hintergrundelement mit <code>"auto"</code> skaliert, das vierte mit <code>"100px 100px"</code>, und das fünfte mit <code>"auto"</code>.
        </p>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"auto"</code> verwendet.</p>
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
          Bestimmt, welches Farbschema auf das Chrome (z.B. Kontextmenüs) und den Inhalt (z.B. integrierte Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Theme ausgewählt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"auto"</code> verwendet.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt (z. B. integrierte Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird. Überschreibt <code>color_scheme</code>. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema, das automatisch basierend auf dem Theme ausgewählt wird.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig <code>"auto"</code> verwendet.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Theme muss ein Bild definieren, das dem Header hinzugefügt wird, die Akzentfarbe, die im Header verwendet wird, und die Farbe des Textes, der im Header verwendet wird:

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

Mehrere Elemente können verwendet werden, um den Header zu füllen. Vor Version 60 von Firefox verwenden Sie ein leeres oder transparentes Headerbild, um die Platzierung jedes zusätzlichen Elements zu steuern:

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

Sie können den Header auch mit einem wiederholten Bild oder Bildern füllen, in diesem Fall ein einzelnes Bild, das in der Mitte oben im Header verankert ist und über den Rest des Headers wiederholt wird:

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

Dies ergibt einen Browser, der so aussieht:

![Ein Browserfenster mit zwei geöffneten Registerkarten und dunkelgrüner Hintergrundfarbe im Headerbereich. Die inaktive Registerkarte hat eine weiße Textfarbe. Die aktive Registerkarte und die Symbolleiste haben eine blaue Hintergrundfarbe mit zyanfarbenem Text. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rändern, eine grüne Textfarbe und eine weiße senkrechte Trennungslinie. Eine rote Linie wird verwendet, um die Registerkarten oben zu trennen, und eine weiße Linie, um die Registerkarten vom darunterliegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Lesezeichen-Symbol vom Rest der Symbole trennt.

Dieses Beispiel (Firefox 153+) kombiniert Bildhintergründe mit einem CSS-Linearverlauf:

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

- `background-image1.svg`, das oben rechts in der natürlichen Größe angezeigt wird.
- `background-image2.svg`, das oben links in der natürlichen Größe angezeigt wird.
- Der `linear-gradient`, der von oben rechts gekachelt horizontal über den Header (`repeat-x`) zeigt und auf 144 Pixel Höhe skaliert wird (die Breite ist automatisch). Der Verlauf wechselt von Rosa (`#FF6BBA`) am oberen Teil zu Pfirsich (`#FFC999`) am unteren Teil.

## Browser-Kompatibilität

{{Compat}}

### Chrome Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, nutzen Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild oben links im Header und kachelt das Bild, wenn es den Headerbereich nicht ausfüllt.
- Alle Farben müssen als Array von RGB-Werten angegeben werden, wie in folgendem Beispiel:

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
