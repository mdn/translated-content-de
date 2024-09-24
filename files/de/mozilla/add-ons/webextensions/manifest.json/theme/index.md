---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 668b38a4f6cd96609b9a969fe4653b46aec4e712
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row">Typ</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">Erforderlich</th>
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
    "tab_background_text": "#000"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel "theme", um ein statisches Design zu definieren, das auf Firefox angewendet wird.

> [!NOTE]
> Wenn Sie ein Design mit einer Erweiterung einbinden möchten, siehe die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Designs signiert sein, um installiert werden zu können ([Firefox Bug 1545109](https://bugzil.la/1545109)). Weitere Informationen finden Sie unter [Signing and distributing your add-on](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

> [!NOTE]
> Eine neue Firefox-Version für Android, basierend auf GeckoView, ist in Entwicklung. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Designs.

## Bildformate

Die folgenden Bildformate werden in allen Designeigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animierte SVGs werden ab Firefox 59 unterstützt)
- GIF (animierte GIFs werden nicht unterstützt)

## Syntax

Der "theme"-Schlüssel ist ein Objekt, das die folgenden Eigenschaften annimmt:

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
        <p>Optional ab Firefox 60. Erforderlich vor Firefox 60.</p>
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
        <p>Erforderlich.</p>
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
          <code>"additional_backgrounds"</code>-Bilder angezeigt werden und Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
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
      <td><code>String</code></td>
      <td>
        <p>
          Die URL eines Vordergrundbildes, das dem Headerbereich hinzugefügt
          und in der oberen rechten Ecke des Headerbereichs verankert wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild an der oberen
            linken Seite des Headers und wenn das Bild den Headerbereich nicht
            ausfüllt, wird das Bild gekachelt.
          </p>
        </div>
        <p>
          Optional in Desktop Firefox 60 und höher. Erforderlich in Firefox für Android.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array </code>von <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die Eigenschaft
            <code>additional_backgrounds</code> ist experimentell. Sie wird
            derzeit in stabilen Versionen von Firefox akzeptiert, ihr Verhalten
            kann sich jedoch ändern. Sie wird in Firefox für Android nicht unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem
          Headerbereich hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Bild angezeigt werden. Diese Bilder
          schichten das erste Bild im Array oben auf und das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig sind alle Bilder in der oberen rechten Ecke des
          Headerbereichs verankert, aber ihre Ausrichtung und das
          Wiederholungsverhalten können durch Eigenschaften von <code>"properties":</code> gesteuert werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### colors

Diese Eigenschaften definieren die für verschiedene Teile des Browsers verwendeten Farben. Sie sind alle optional. Wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht über die Farbeigenschaften und wie sie auf Firefox-UI-Komponenten angewendet werden"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn eine Komponente von mehreren Farbeigenschaften beeinflusst wird, werden die Eigenschaften in der Reihenfolge der Priorität aufgelistet.

Alle diese Eigenschaften können entweder als Zeichenfolge mit jedem gültigen [CSS-Farbstring](/de/docs/Web/CSS/color_value) (einschließlich Hexadezimal) oder als RGB-Array spezifiziert werden, z. B. `"tab_background_text": [ 107 , 99 , 23 ]`.

> **Hinweis:** [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben folgendermaßen angegeben werden:
>
> - vollständige hexadezimale Notation, das heißt nur #RRGGBB. _alpha_ und verkürzte Syntax wie #RGB\[A], werden nicht unterstützt.
> - [Funktionale Notation](/de/docs/Web/CSS/color_value#rgb_syntax_variations) (RGB-Arrays) für Designs, die auf Firefox 68.2 oder später abzielen.
>
> Farben für Firefox für Android-Designs können nicht mit Farbnamen angegeben werden.

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
          Die Farbe des Textes und der Symbole in der Lesezeichen- und Suchleiste. Wenn
          <code>tab_text</code> nicht definiert ist, wird die Farbe des aktiven
          Tabtextes festgelegt, und wenn <code>icons</code> nicht definiert ist, die Farbe der
          Symbolleiste-Symbole. Wird als Chrome-kompatibler Alias für
          <code>toolbar_text</code> bereitgestellt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe einen
            guten Kontrast zu den in <code>frame</code> und
            <code>frame_inactive</code> oder
            <code>toolbar</code>, wenn Sie diese Eigenschaft verwenden, hat.
          </p>
          <p>
            Wo <code>icons</code> nicht definiert ist, stellen Sie auch einen guten Kontrast zu
            <code>button_background_active</code> und
            <code>button_background_hover</code> sicher.
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
            alt="Browser Firefox ist schwarz. Browser-Tab ist schwarz mit weißem Text. URL-Leiste und die Suchleiste sind weiß mit schwarzem Text, aber alle Symbole der Browser- und Suchleiste sind rot."
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol zum Anpassen der Symbolleiste in der URL-Leiste ist weiß mit einem roten Hintergrund, gedrückt und ein Popup wird geöffnet, das eine kurze Liste von Dingen anzeigt, die zur Symbolleiste hinzugefügt werden können, wie die Bibliothek und die Seitenleisten des Browsers." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe der Schaltflächen der Symbolleiste beim Überfahren mit der Maus.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Eine Seite zurück' ist weiß mit einem roten Kreishintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Symbolleistensymbole, mit Ausnahme derjenigen in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den verwendeten in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> kontrastiert.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das URL-Leisten- und das 'Neuen Tab öffnen'-Symbol sind rot. Die roten Symbole stehen im guten Kontrast zur schwarzen Hintergrundfarbe des Headerbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe von Symbolleistensymbolen im Zustand der Aufmerksamkeit, wie
          das markierte Lesezeichensymbol oder das abgeschlossene
          Download-Symbol.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den verwendeten in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> kontrastiert.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Diese Seite als Lesezeichen hinzufügen' ist rot und gedrückt, ein offenes Popup namens 'Dieses Lesezeichen bearbeiten' wird angezeigt. Wenn das Symbol im Aufmerksamkeitsszustand ist, steht es im guten Kontrast zur schwarzen Hintergrundfarbe des Headerbereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Headerbereichs, der im Teil des Headers
          angezeigt wird, der nicht bedeckt ist oder durch die in
          <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Bilder sichtbar ist.
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
        <p><img alt="Der Browser Firefox ist rot mit weißem Text. Die Registerkarten des Browsers sind heller Rot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Headerbereichs, wenn das Browserfenster inaktiv ist,
          angezeigt im nicht bedeckten Teil des Headers oder sichtbar durch die in <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Bilder.
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
            alt="Der Browser Firefox ist grau. Die Registerkarten und die URL-Leiste des Browsers sind hellgrau. Der Tabtext ist weiß und die URL-Leisten-Symbole sind dunkleres Grau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Tabs Seite.</p>
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
        <p>Die Hintergrundfarbe der neuen Tabseite-Karte.</p>
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
            der verwendeten in <code>ntp_background</code> und <code>ntp_card_background</code> kontrastiert.
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite an. Auf der Seite ist der Text rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie dem Dropdown der URL-Leiste und
          den Pfeilpanels).
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite als Lesezeichen hinzufügen' ist blau und gedrückt, ein offenes Popup namens 'Dieses Lesezeichen bearbeiten' wird mit einem roten Hintergrund angezeigt. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_border</code></td>
      <td>
        <p>Die Randfarbe von Popups.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite als Lesezeichen hinzufügen' ist blau und gedrückt, ein offenes Popup namens 'Dieses Lesezeichen bearbeiten' wird mit einem roten Rand und einem schwarzen Hintergrund angezeigt. Der Rand des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die mithilfe der Tastatur innerhalb
          von Popups hervorgehoben werden (wie das gewählte Element im Dropdown der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen, <code>popup_highlight_text</code> zu definieren, um die Standardtextfarbe des Browsers auf verschiedenen Plattformen zu überschreiben.
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
        <p><img alt="Ein Screenshot von Firefox, der schwarz ist. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Popup mit Suchergebnissen wird angezeigt, wobei der Hintergrund des hervorgehobenen Elements rot ist. Die Hintergrundfarbe des hervorgehobenen Elements innerhalb des Popups ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der verwendeten in <code>popup_highlight</code> kontrastiert.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Popup mit Suchergebnissen wird angezeigt, wobei der Text des hervorgehobenen Elements rot mit einem schwarzen Hintergrund ist. Die Textfarbe des hervorgehobenen Elements steht im guten Kontrast zum schwarzen Hintergrund dieses Elements." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der verwendeten in <code>popup</code> kontrastiert.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Popup mit Suchergebnissen wird angezeigt, wobei die Texte der Elemente rot sind. Die Textfarbe steht im guten Kontrast zur schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
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
        <p><img alt="Ein Nahaufnahme-Screenshot eines geöffneten Seitenbereichs eines Browserfensters. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rand- und Trennfarbe der Browser-Seitenleiste</p>
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
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem roten horizontalen Trenner zwischen dem Titel der Seitenleiste und dem Seitenleistemenü. Die Rand- und Trennfarbe der Seitenleiste ist rot." src="sidebar-border.png" /></p>
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
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Zeilen in Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der verwendeten in <code>sidebar_highlight</code> kontrastiert.
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
        <p><img alt="Ein Nahaufnahme der Firefox-Browser-Lesezeichen-Seitenleiste mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe steht im guten Kontrast zur pinken Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleisten.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der verwendeten in <code>sidebar</code> kontrastiert.
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
        <p><img alt="Ein Nahaufnahme-Screenshot eines geöffneten Seitenbereichs eines Browserfensters. Die Farbe des Textes innerhalb der Seitenleiste ist weiß. Die Textfarbe steht im guten Kontrast zur roten Hintergrundfarbe der Seitenleiste." src="sidebar-colors.png" /></p>
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
        <p>Die Farbe des vertikalen Trenners der Hintergrund-Reiter.</p>
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
            alt="Ein Nahaufnahme von Browser-Tabs zur Hervorhebung des Trenners."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Seitentabs angezeigt wird. Wenn
          <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben sind,
          gilt es auch für den Text der aktiven Tabs.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den verwendeten in <code>tab_selected</code> oder
            <code>frame</code> und
            <code>frame_inactive</code> kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes im geöffneten Tab ist rot. Die Textfarbe steht im guten Kontrast zur schwarzen Hintergrundfarbe des Tabs." src="theme-tab_background_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_line</code></td>
      <td>
        <p>Die Farbe der Linie des ausgewählten Tabs.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit helleren grauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Linie." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Tab-Ladeanzeigers und des Tab-Ladeimpulses.</p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit weißen Symbolen und Text. Im ausgewählten Tab ist ein animierter Ladeanzeiger rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht verwendet, wird die Farbe des ausgewählten
          Tabs durch <code>frame</code> und
          <code>frame_inactive</code> festgelegt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit weißen Symbolen und Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_text</code></td>
      <td>
        <p>
          Ab Firefox 59 repräsentiert es die Textfarbe für den ausgewählten Tab. Wenn
          <code>tab_line</code> nicht angegeben ist, definiert es auch die Farbe der
          Linie des ausgewählten Tabs.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den verwendeten in <code>tab_selected</code> oder
            <code>frame</code> und
            <code>frame_inactive</code> kontrastiert.
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
        <p><img alt="Der Browser Firefox hat ein Insektenbild als Thema. Die URL-Leiste ist heller grau mit weißen Symbolen. Der ausgewählte Tab-Text ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und
          den ausgewählten Tab.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten, die Suchleiste und die URL-Leiste des Browsers sind rot mit weißem Text und Symbolen, außer in der Suchleiste, wo der Text und das Symbol schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Teil der Symbolleiste vom
          darunter liegenden Bereich trennt.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Eine horizontale rote Linie trennt den unteren Teil der Symbolleiste vom Beginn der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
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
          <strong>Suchen</strong>-Felds fest.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten, die Suchleiste und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Die Hintergrundfarbe der URL-Leiste ist rot. Die Suchleiste ist weiß mit schwarzem Text. Das Suchfeld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Randfarbe für Felder in der Symbolleiste.</p>
        <p>
          Dies legt auch die Randfarbe des
          <strong>Suchen</strong>-Felds fest.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten, das Suchwerkzeug und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Die URL-Leiste und die Felder des Suchwerkzeugs sind rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die konzentrierte Randfarbe für Felder in der Symbolleiste.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Das URL-Leistenfeld ist fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die fokussierte Hintergrundfarbe für Felder in der Symbolleiste, wie
          die URL-Leiste.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten, das Suchwerkzeug und die URL-Leiste sind schwarz mit weißem Text und Symbolen. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl des Texts in
        der URL-Leiste anzuzeigen (und der Suchleiste, falls sie als separate konfiguriert ist).
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
            alt="Der Browser Firefox ist weiß. Die Registerkarten und die URL-Leiste des Browsers sind weiß mit Text und Symbolen in schwarz. Das URL-Leistenfeld ist fokussiert und blau umrandet und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das Feld <code>toolbar_field_highlight</code> an, dass
          die Hervorhebungsfarbe ein helles Grün ist, während der Text auf ein
          mittelgrün gesetzt wird, unter Verwendung von <code>toolbar_field_highlight_text</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um Text zu zeichnen, der derzeit in der URL-Leiste
          ausgewählt ist (und der Suchleiste, falls sie als separates Feld konfiguriert ist).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den verwendeten in <code>toolbar_field_highlight</code> kontrastiert.
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
            alt="Der Browser Firefox ist weiß. Die Registerkarten und die URL-Leiste des Browsers sind weiß mit Text und Symbolen in schwarz. Das URL-Leistenfeld ist fokussiert und blau umrandet und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das Feld <code>toolbar_field_highlight_text</code> verwendet, um
          die Textfarbe auf ein dunkles mittel-dunkelgrün zu setzen, während die Hervorhebungsfarbe ein helles Grün ist.
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
          Die Farbe der Separatoren innerhalb der URL-Leiste. In Firefox 58 wurde dies
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Im Inneren der weißen URL-Leiste befindet sich nach dem Reader-Modus-Symbol eine rote vertikale Linie, die die restlichen Symbole der URL-Leiste trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die
          rote vertikale Linie in der URL-Leiste, die das Reader-Modus-Symbol von
          den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Symbolleiste, wie der URL-Leiste. Dies
          legt auch die Farbe des Textes im
          <strong>Suchen</strong>-Feld fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den verwendeten in <code>toolbar_field</code> kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Der Text innerhalb der URL-Leiste ist rot. Die Symbole und das Suchwerkzeug-Feld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Symbolleiste, wie
          der URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den verwendeten in <code>toolbar_field_focus</code> kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die URL-Leiste hat den Fokus; der Text und die Symbole der URL-Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Symbolleistentextes. Dies legt auch die Textfarbe in der
          "Suchen"-Leiste fest.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarten, die "Suchen"-Leiste und die URL-Leiste des Browsers sind schwarz mit rotem Text und Symbolen. Der Text im aktiven Tab, in der Navigationsleiste und in der Suchleiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Teil der Symbolleiste vom
          darüber liegenden Bereich trennt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit weißem Text und Symbolen. Eine rote Linie trennt den oberen Teil der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Trenners in der Lesezeichenleiste. In Firefox 58
          entspricht es der Farbe der Separatoren innerhalb der URL-Leiste.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die Farbe der vertikalen Linie, die die Lesezeichenleiste vom Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Alias-Namen

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese werden für die Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben ist und auch die Nicht-Alias-Version angegeben ist, wird der Wert aus der Nicht-Alias-Version übernommen.

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
          Ein Array von Enumerationswerten, das die Ausrichtung der
          entsprechenden <code>"additional_backgrounds":</code>-Array-Elemente definiert.<br />Die
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
        <p>Wenn nicht angegeben, standardmäßig auf <code>"right top"</code>.</p>
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
          Ein Array von Enumerationswerten, das definiert, wie das entsprechende
          <code>"additional_backgrounds":</code>-Array-Element wiederholt wird. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"no-repeat"</code></li>
          <li><code>"repeat"</code></li>
          <li><code>"repeat-x"</code></li>
          <li><code>"repeat-y"</code></li>
        </ul>
        <p>Wenn nicht angegeben, standardmäßig auf <code>"no-repeat"</code>.</p>
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
          Bestimmt, welches Farbschema auf das Chrome (z. B. Kontextmenüs)
          und den Inhalt (z. B. integrierte Seiten und das bevorzugte Farbschema für Webseiten)
          angewendet wird. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend automatisch auf dem Theme.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, standardmäßig auf <code>"auto"</code>.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt (z. B.
          integrierte Seiten und
          bevorzugtes Farbschema für Webseiten) angewendet wird. Überschreibt <code>color_scheme</code>. Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend automatisch auf dem Theme.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, standardmäßig auf <code>"auto"</code>.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein einfaches Thema muss ein Bild definieren, das dem Header hinzugefügt wird, die Akzentfarbe, die im Header verwendet werden soll, und die Farbe des Textes, der im Header verwendet wird:

```json
 "theme": {
   "images": {
     "theme_frame": "images/sun.jpg"
   },
   "colors": {
     "frame": "#CF723F",
     "tab_background_text": "#000"
   }
 }
```

Mehrere Bilder können verwendet werden, um den Header zu füllen. Vor Firefox Version 60 verwenden Sie ein leeres oder transparentes Headerbild, um die Platzierung jedes zusätzlichen Bildes steuern zu können:

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
     "tab_background_text": "#ffffff"
   }
 }
```

Sie können den Header auch mit einem wiederkehrenden Bild oder Bildern füllen, in diesem Fall ein einzelnes Bild, das in der oberen Mitte des Headers verankert ist und über den Rest des Headers wiederholt wird:

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
     "tab_background_text": "#000"
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

Es ergibt einen Browser, der folgendermaßen aussieht:

![Ein Browserfenster mit zwei geöffneten Tabs und einer dunkelgrünen Hintergrundfarbe im Headerbereich. Der inaktive Tab hat eine weiße Textfarbe. Der aktive Tab und die Symbolleiste haben eine blaue Hintergrundfarbe mit cyanfarbenem Text. Die URL-Leiste hat einen orangen Hintergrund mit weißen Rändern, eine grüne Textfarbe und ein weißfarbener vertikaler Linientrenner. Eine rote Linie wird verwendet, um die Tabs oben zu trennen, und eine weiße Linie, um die Tabs vom darunter liegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Modus-Symbol von den anderen Symbolen trennt.

## Browserkompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild an der oberen linken Seite des Headers und wenn das Bild den Headerbereich nicht ausfüllt, wird das Bild gekachelt.
- alle Farben müssen als ein Array von RGB-Werten angegeben werden, wie folgt:

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
