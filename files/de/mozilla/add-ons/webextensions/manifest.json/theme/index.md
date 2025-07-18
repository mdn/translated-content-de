---
title: theme
slug: Mozilla/Add-ons/WebExtensions/manifest.json/theme
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

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
      <th scope="row">Manifestversion</th>
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

Verwenden Sie den Schlüssel `theme`, um ein statisches Thema zu definieren, das auf Firefox angewendet werden soll.

> [!NOTE]
> Wenn Sie ein Thema in eine Erweiterung einbinden möchten, siehe die {{WebExtAPIRef("theme")}} API.

> [!NOTE]
> Seit Mai 2019 müssen Themen signiert sein, um installiert werden zu können ([Firefox bug 1545109](https://bugzil.la/1545109)). Einzelheiten finden Sie unter [Signieren und Verteilen Ihres Add-ons](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

> [!NOTE]
> Eine neue Version von Firefox für Android, basierend auf GeckoView, befindet sich in der Entwicklung. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Themen.

## Bildformate

Die folgenden Bildformate werden in allen Themeneigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animierte SVG wird ab Firefox 59 unterstützt)
- GIF (animierte GIFs werden nicht unterstützt)

## Syntax

Der `theme`-Schlüssel ist ein Objekt, das die folgenden Eigenschaften annimmt:

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
          <code>"additional_backgrounds"</code>-Bilder angezeigt werden und wie Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Bilder

Alle URLs sind relativ zur `manifest.json`-Datei und können keine externe URL referenzieren.

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
      <td><code>String</code></td>
      <td>
        <p>
          Die URL eines Vordergrundbildes, das zum Header-Bereich hinzugefügt werden soll und
          an der oberen rechten Ecke des Header-Bereichs verankert wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild an der oberen linken Seite des Headers und wenn das Bild den Header-Bereich nicht ausfüllt, wird das Bild gekachelt.
          </p>
        </div>
        <p>
          Optional in Desktop-Firefox ab Version 60. Erforderlich in Firefox für Android.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die Eigenschaft <code>additional_backgrounds</code> ist experimentell. Sie wird derzeit in den Release-Versionen von Firefox akzeptiert, aber ihr Verhalten kann sich ändern. Sie wird nicht in Firefox für Android unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem
          Header-Bereich hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Bild angezeigt werden sollen. Diese Bilder schichten das erste Bild im Array oben, das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig sind alle Bilder an der oberen rechten Ecke des
          Header-Bereichs verankert, ihre Ausrichtung und Wiederholverhalten kann aber durch Eigenschaften von <code>"properties":</code> gesteuert werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Farben

Diese Eigenschaften definieren die Farben, die für verschiedene Teile des Browsers verwendet werden. Sie sind alle optional. Wie diese Eigenschaften die Firefox-Benutzeroberfläche beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht über die Farbeingenschaften und ihre Anwendung auf Firefox-UI-Komponenten"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn eine Komponente von mehreren Farbeigenschaften beeinflusst wird, sind die Eigenschaften in der Reihenfolge der Vorrangigkeit aufgeführt.

Alle diese Eigenschaften können entweder als String mit einem beliebigen gültigen [CSS-Farbestring](/de/docs/Web/CSS/color_value) (einschließlich Hexadezimalwerten) oder einem RGB-Array angegeben werden, wie z.B. `"tab_background_text": [ 107 , 99 , 23 ]`.

> [!NOTE]
> [In Chrome können Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben mit folgenden Angaben spezifiziert werden:
>
> - vollständige Hexadezimalschreibweise, das heißt nur #RRGGBB. _alpha_ und verkürzte Syntax, wie in #RGB\[A], werden nicht unterstützt.
> - [Funktionale Notation](/de/docs/Web/CSS/color_value) (RGB-Arrays) für Themen, die auf Firefox 68.2 oder später abzielen.
>
> Farben für Firefox für Android-Themen können nicht mit Farbnamen angegeben werden.

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
          Die Farbe von Text und Icons in den Lesezeichen- und Suchleisten. Wenn
          <code>tab_text</code> nicht definiert ist, setzt er auch die Farbe des aktiven
          Tab-Texts und wenn <code>icons</code> nicht definiert ist, die Farbe der Toolbar-Icons. Bereitgestellt als Chrome-kompatibles Alias für
          <code>toolbar_text</code>.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut mit
            denen übereinstimmt, die in <code>frame</code> und <code>frame_inactive</code> oder
            <code>toolbar</code> verwendet werden, wenn Sie diese Eigenschaft nutzen.
          </p>
          <p>
            Wo <code>icons</code> nicht definiert ist, stellen Sie auch sicher, dass ein guter Kontrast zu <code>button_background_active</code> und
            <code>button_background_hover</code> besteht.
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
            alt="Firefox-Browser ist schwarz. Die Registerkarte des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die Suchleiste sind weiß mit schwarzem Text, aber alle Symbole der Browser und der Suchleiste sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der gedrückten Toolbar-Buttons.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol zum Anpassen der Toolbar in der URL-Leiste in weiß mit rotem Hintergrund ist gedrückt, und ein Popup wird geöffnet, das eine kurze Liste von Elemente anzeigt, die zur Toolbar hinzugefügt werden können, wie zum Beispiel die Bibliothek des Browsers und die Seitenleisten." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Farbe des Hintergrunds der Toolbar-Buttons beim Schweben.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Eine Seite zurück' ist weiß mit einem roten Kreis im Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Toolbar-Icons, ausgenommen die in der Suchleiste.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut
            mit denen in <code>frame</code>, <code>frame_inactive</code>,
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Die URL-Leiste und das Öffnen eines neuen Tab-Symbols sind rot. Die roten Symbole kontrastieren gut mit dem schwarzen Hintergrund des Headerbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe von Toolbar-Icons im Aufmerksamkeitsstatus, wie zum Beispiel das markierte Lesezeichen-Symbol oder das abgeschlossene Download-Symbol.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut
            mit denen in <code>frame</code>, <code>frame_inactive</code>,
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol 'Diese Seite bookmarken' ist rot und gedrückt, ein geöffnetes Popup namens 'Dieses Lesezeichen bearbeiten' wird angezeigt. Während im Aufmerksamkeitsstatus die Toolbar-Icons gut mit dem schwarzen Hintergrund des Headerbereichs kontrastieren." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Headerbereichs, der in dem Teil des Headers angezeigt wird, der nicht von den in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Bildern abgedeckt oder sichtbar ist.
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
        <p><img alt="Der Firefox-Browser ist rot mit weißem Text. Die Registerkarten des Browsers sind hellrot, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Hintergrunds des Headerbereichs, wenn das Browserfenster inaktiv ist. Diese Farbe wird in dem Teil des Headers angezeigt, der nicht von den in <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen Bildern abgedeckt oder sichtbar ist.
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
            alt="Der Firefox-Browser ist grau. Die Registerkarten und die URL-Leiste des Browsers sind heller grau. Der Tab-Text ist weiß und die Symbole der URL-Leiste sind dunkler grau."
            src="theme-frame_inactive.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Registerkartenseite.</p>
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
        <p><img alt="Firefox zeigt eine neue Registerkartenseite. Der Hintergrund der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der Karte der neuen Registerkartenseite.</p>
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
        <p><img alt="Firefox zeigt eine neue Registerkartenseite. Auf der Seite ist der Hintergrund zur Suchleiste und Shortcut-Buttons rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Registerkartenseite.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>ntp_background</code> und <code>ntp_card_background</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Firefox zeigt eine neue Registerkartenseite. Auf der Seite ist der Text rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie dem Dropdown der URL-Leiste und den Pfeilpanels).
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite bookmarken' ist blau und gedrückt, ein geöffnetes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird mit einem roten Hintergrund angezeigt. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite bookmarken' ist blau und gedrückt, ein geöffnetes Popup mit dem Namen 'Dieses Lesezeichen bearbeiten' wird mit einer roten Umrandung und schwarzem Hintergrund angezeigt. Der Rahmen des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die innerhalb von Popups über die Tastatur hervorgehoben sind (wie das ausgewählte Dropdown-Element der URL-Leiste).
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Es wird empfohlen,
            <code>popup_highlight_text</code> zu definieren, um die standardmäßige Browser-Textfarbe auf diversen Plattformen zu überschreiben.
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
        <p><img alt="Screenshot von Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit dem Hintergrund des hervorgehobenen Elements in rot. Die Hintergrundfarbe des hervorgehobenen Elements innerhalb des Popups ist rot." src="theme-popup_highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Elementen innerhalb von Popups.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>popup_highlight</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit dem Text des hervorgehobenen Elements in rot mit einem schwarzen Hintergrund. Die Textfarbe des hervorgehobenen Elements kontrastiert gut mit der schwarzen Hintergrundfarbe dieses Elements." src="theme-popup_highlight_text.png" /></p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit rotem Text der Elemente. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
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
        <p><img alt="Ein naher Screenshot eines geöffneten Fensters der Browser-Seitenleiste. Die Hintergrundfarbe der Seitenleiste ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rahmen- und Trennfarbe der Browsersidebar</p>
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
        <p><img alt="Eine Nahaufnahme der Bookmarks-Seitenleiste des Firefox-Browsers mit einem roten horizontalen Trennstrich zwischen dem Titel der Seitenleiste und dem Menü der Seitenleiste. Die Rahmen- und Trennfarbe der Sidebar ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe hervorgehobener Zeilen in integrierten Seitenleisten</p>
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
        <p><img alt="Eine Nahaufnahme der Bookmarks-Seitenleiste des Firefox-Browsers mit einem hervorgehobenen Element. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Seitenleiste ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
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
        <p><img alt="Eine Nahaufnahme der Bookmarks-Seitenleiste des Firefox-Browsers mit einem hervorgehobenen Element. Die Farbe des Textes einer hervorgehobenen Zeile in der Seitenleiste ist rot. Die Textfarbe kontrastiert gut mit der rosa Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
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
        <p><img alt="Eine Nahaufnahme eines geöffneten Fensters der Browser-Seitenleiste. Die Farbe des Textes in der Seitenleiste ist weiß. Die Textfarbe kontrastiert gut mit dem roten Hintergrund der Seitenleiste." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td>
        <code>tab_background_separator</code> {{Deprecated_Inline}}
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>tab_background_separator</code> wird nicht mehr unterstützt ab Firefox 89.
          </p>
        </div>
        <p>Die Farbe des vertikalen Trennstrichs der Hintergrund-Tabs.</p>
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
            alt="Eine Nahaufnahme der Browser-Tabs, um den Separator hervorzuheben."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des Textes, der in den inaktiven Tab-Seiten angezeigt wird. Wenn
          <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist,
          gilt für den aktiven Tab-Text.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut
            mit denen in <code>tab_selected</code> oder <code>frame</code> und
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes im offenen Tab ist rot. Die Textfarbe kontrastiert gut mit der schwarzen Hintergrundfarbe des Tabs." src="theme-tab_background_text.png" /></p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit helleren grauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Ladeindikators für Tabs und das Ladeausbürsten der Tabs.</p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit weißen Symbolen und Text. Im ausgewählten Tab ist ein animierter Ladeindikator rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht verwendet, wird die ausgewählte Tab-Farbe durch <code>frame</code> und das
          <code>frame_inactive</code> gesetzt.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit weißen Symbolen und Text. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
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
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut
            mit denen in <code>tab_selected</code> oder <code>frame</code> und
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
        <p><img alt="Der Firefox-Browser hat ein Bild eines Insektenmotivs. Die URL-Leiste ist heller grau mit weißen Symbolen. Der ausgewählte Tab-Text ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und
          den ausgewählten Tab.
        </p>
        <p>Dies setzt auch die Hintergrundfarbe der "Finden"-Leiste.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte, die 'Seite durchsuchen'-Leiste und die URL-Leiste des Browsers sind rot mit weißen Texten und Symbolen, außer in der 'Seite durchsuchen'-Leiste, wo der Text und die Symbole schwarz sind." src="toolbar.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_bottom_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den unteren Teil der Toolbar von dem
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte und die URL-Leiste sind heller grau mit weißen Symbolen und Text. Eine horizontale rote Linie trennt den unteren Teil der Toolbar und den Anfang der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für Felder in der Toolbar, wie die URL-Leiste.
        </p>
        <p>
          Dies setzt auch die Hintergrundfarbe des
          <strong>Seite durchsuchen</strong>-Felds.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte, die 'Seite durchsuchen'-Leiste und die URL-Leiste sind heller grau mit weißen Symbolen und Text. Die Hintergrundfarbe der URL-Leiste ist rot. Die 'Seite durchsuchen'-Leiste ist weiß mit schwarzem Text. Das 'Seite durchsuchen'-Feld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Rahmenfarbe für Felder in der Toolbar.</p>
        <p>
          Dies setzt auch die Rahmenfarbe des
          <strong>Seite durchsuchen</strong>-Felds.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte, 'Seite durchsuchen'-Leiste und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Die URL-Leiste und die 'Seite durchsuchen'-Felder sind rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die fokussierte Rahmenfarbe für Felder in der Toolbar.</p>
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Das URL-Leisten-Feld ist fokussiert und rot umrandet." src="theme-toolbar_field_border_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_focus</code></td>
      <td>
        <p>
          Die fokussierte Hintergrundfarbe für Felder in der Toolbar, wie die
          URL-Leiste.
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
        <p><img alt="Der Firefox-Browser ist schwarz. Die Registerkarte, 'Seite durchsuchen'-Leiste und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Die Hintergrundfarbe der fokussierten URL-Leiste ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die zur Anzeige der aktuellen Textauswahl in der
        URL-Leiste verwendet wird (und der Suchleiste, wenn sie als separater Bereich konfiguriert ist).
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
            alt="Der Firefox-Browser ist weiß. Die Registerkarte und die URL-Leiste sind weiß mit schwarzen Symbolen und Text. Das URL-Leisten-Feld ist fokussiert und blau umrandet, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das Feld <code>toolbar_field_highlight</code> an, dass
          die Hervorhebungsfarbe ein helles Grün ist, während der Text auf ein
          Mittelgrün bis Dunkelgrün mit <code>toolbar_field_highlight_text</code> eingestellt wird.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die zum Zeichnen von Text verwendet wird, der derzeit in der URL-Leiste
          (und der Suchleiste, wenn sie als separates Feld konfiguriert ist) ausgewählt ist.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>toolbar_field_highlight</code> verwendeten Farbe kontrastiert.
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
            alt="Der Firefox-Browser ist weiß. Die Registerkarte und die URL-Leiste sind weiß mit schwarzen Symbolen und Text. Das URL-Leisten-Feld ist fokussiert und blau umrandet, und der Text in der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das Feld <code>toolbar_field_highlight_text</code> verwendet, um
          die Textfarbe auf ein mittleres bis dunkleres Grün einzustellen, während die Hervorhebungsfarbe ein helles Grün ist.
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
          Die Farbe der Trennlinien innerhalb der URL-Leiste. In Firefox 58 wurde dies
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Firefox-Browser ist schwarz. Die Registerkarte und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Innerhalb der weißen URL-Leistenfeld, nach dem Reader-Modus-Symbol, eine rote vertikale Linie, die den Rest der URL-Leisten-Symbole separiert. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
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
          Die Farbe des Texts in Feldern in der Toolbar, wie die URL-Leiste. Dies
          setzt auch die Farbe des Texts im
          <strong>Seite durchsuchen</strong>-Feld.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>toolbar_field</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Der Text innerhalb der URL-Leiste ist rot. Die Symbole und das 'Seite durchsuchen'-Feld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Texts in fokussierten Feldern in der Toolbar, wie die URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            der in <code>toolbar_field_focus</code> verwendeten Farbe kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei offenen Tabs. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Die URL-Leiste hat Fokus; der Text und die Symbole der Leiste sind rot mit schwarzem Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Toolbar-Texts. Dies setzt auch die Farbe des Texts in der
          "Finden"-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Für Kompatibilität mit Chrome verwenden Sie das Alias
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarte, die 'Seite durchsuchen'-Leiste und die URL-Leiste sind schwarz mit roten Texten und Symbolen. Der Text innerhalb des aktiven Tabs, der Navigatorleiste und der 'Seite durchsuchen'-Leiste ist rot." src="toolbar-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_top_separator</code></td>
      <td>
        <p>
          Die Farbe der Linie, die den oberen Teil der Toolbar von dem
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Eine rote Linie trennt den oberen Teil der URL-Leiste von dem Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Separators in der Lesezeichenleiste. In Firefox 58 entspricht es der Farbe der Trenner innerhalb der URL-Leiste.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Die Farbe der vertikalen Linie, die die Lesezeichenleiste von dem Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliase

Darüber hinaus akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliase für eine der oben genannten Eigenschaften sind. Diese werden für die Kompatibilität mit Chrome bereitgestellt. Wenn sowohl ein Alias als auch die Nicht-Alias-Version angegeben sind, wird der Wert aus der Nicht-Alias-Version übernommen.

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

### Eigenschaften

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
        <p>Falls nicht angegeben, wird auf <code>"right top"</code> standardmäßig gesetzt.</p>
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
        <p>Wenn nicht angegeben, wird standardmäßig auf <code>"no-repeat"</code> gesetzt.</p>
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
          Bestimmt, welches Farbschema auf das Chrome (zum Beispiel Kontextmenüs)
          und den Inhalt (zum Beispiel integrierte Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird.
          Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend auf dem Thema.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig auf <code>"auto"</code> gesetzt.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt angewendet wird (zum Beispiel integrierte Seiten und
          bevorzugtes Farbschema für Webseiten). Überschreibt <code>color_scheme</code>. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend auf dem Thema.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird standardmäßig auf <code>"auto"</code> gesetzt.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein grundlegendes Thema muss ein Bild definieren, das dem Header hinzugefügt werden soll, die Akzentfarbe für den Header sowie die dafür verwendete Textfarbe:

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

Mehrere Bilder können verwendet werden, um den Header auszufüllen. Vor Firefox-Version 60 verwenden Sie ein leeres oder transparentes Headerbild, um die Platzierung jedes zusätzlichen Bildes zu steuern:

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

Sie können den Header auch mit einem wiederholten Bild oder Bilder füllen, in diesem Fall ein einzelnes Bild, das an der mittleren Spitze des Headers verankert und über den restlichen Header hinweg wiederholt wird:

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

Das folgende Beispiel nutzt die meisten verschiedenen Werte für `theme.colors`:

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

![Ein Browserfenster mit zwei offenen Tabs und dunkler grünen Hintergrundfarbe im Headerbereich. Der inaktive Tab hat weiße Textfarbe. Der aktive Tab und die Toolbar haben eine blaue Hintergrundfarbe mit zyanfarbener Textfarbe. Die URL-Leiste hat einen orangen Hintergrund mit weißen Rändern, eine grüne Textfarbe und einen weißen vertikalen Linientrenner. Eine rote Linie wird verwendet, um die Tabs oben zu trennen, und eine weiße Linie, um die Tabs von dem darunter liegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Modus-Symbol von den anderen Symbolen trennt.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild an der oberen linken Seite des Headers und wenn das Bild den Header-Bereich nicht ausfüllt, wird das Bild gekachelt.
- alle Farben müssen als Array von RGB-Werten angegeben werden, so:

  ```json
  "theme": {
    "colors": {
       "frame": [255, 0, 0],
       "tab_background_text": [0, 255, 0],
       "bookmark_text": [0, 0, 255]
    }
  }
  ```

  Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farbform für alle Eigenschaften akzeptiert. Davor erforderte `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbform erforderte.
