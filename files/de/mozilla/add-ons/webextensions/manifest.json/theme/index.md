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
    "tab_background_text": "#000"
  }
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

Verwenden Sie den Schlüssel `theme`, um ein statisches Theme für Firefox festzulegen.

> [!NOTE]
> Wenn Sie ein Theme mit einer Erweiterung einbinden möchten, sehen Sie sich die {{WebExtAPIRef("theme")}} API an.

> [!NOTE]
> Seit Mai 2019 müssen Themes signiert werden, um installiert zu werden ([Firefox Bug 1545109](https://bugzil.la/1545109)). Weitere Informationen finden Sie unter [Signieren und Verteilen Ihres Add-ons](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#distributing-your-addon).

> [!NOTE]
> Eine neue Version von Firefox für Android, basierend auf GeckoView, ist in Entwicklung. Eine [Vorabversion](https://play.google.com/store/apps/details?id=org.mozilla.fenix) ist verfügbar. Die Vorabversion unterstützt keine Themes.

## Bildformate

Die folgenden Bildformate werden in allen Theme-Bildeigenschaften unterstützt:

- JPEG
- PNG
- APNG
- SVG (animiertes SVG wird ab Firefox 59 unterstützt)
- GIF (animiertes GIF wird nicht unterstützt)

## Syntax

Der `theme`-Schlüssel ist ein Objekt, das die folgenden Eigenschaften akzeptiert:

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
        <p>Optional ab Firefox 60. Verpflichtend vor Firefox 60.</p>
        <p>
          Ein JSON-Objekt, dessen Eigenschaften die in verschiedenen Teilen des Browsers anzuzeigenden Bilder darstellen. Siehe
          <code><a href="#images">images</a></code> für Details zu den
          Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>colors</code></td>
      <td><code>Object</code></td>
      <td>
        <p>Verpflichtend.</p>
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
          Dieses Objekt enthält Eigenschaften, die beeinflussen, wie die
          <code>"additional_backgrounds"</code>-Bilder angezeigt werden und Farbschemata angewendet werden. Siehe
          <code><a href="#properties">properties</a></code> für Details zu den Eigenschaften, die dieses Objekt enthalten kann.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### images

Alle URLs sind relativ zur Datei `manifest.json` und können nicht auf eine externe URL verweisen.

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
          Die URL eines Vordergrundbildes, das zum Headerbereich hinzugefügt und
          an der oberen rechten Ecke des Headerbereichs verankert wird.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Chrome verankert das Bild an der oberen linken Ecke
            des Headers und, wenn das Bild den Headerbereich nicht vollständig abdeckt, wird das
            Bild gekachelt.
          </p>
        </div>
        <p>
          Optional ab Firefox 60 auf dem Desktop. Erforderlich in Firefox für Android.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>additional_backgrounds</code></td>
      <td><code>Array</code> von <code>String</code></td>
      <td>
        <div class="warning">
          <p>
            <strong>Warnung:</strong> Die
            <code>additional_backgrounds</code>-Eigenschaft ist experimentell. Sie wird
            momentan in den Release-Versionen von Firefox akzeptiert, aber ihr Verhalten
            kann sich ändern. Sie wird in Firefox für Android nicht unterstützt.
          </p>
        </div>
        <p>
          Ein Array von URLs für zusätzliche Hintergrundbilder, die dem
          Headerbereich hinzugefügt und hinter dem
          <code>"theme_frame":</code>-Bild angezeigt werden. Diese Bilder
          schichten das erste Bild im Array oben und das letzte Bild im Array unten.
        </p>
        <p>Optional.</p>
        <p>
          Standardmäßig werden alle Bilder an der oberen rechten Ecke des
          Headerbereichs verankert, aber ihre Ausrichtung und Wiederholungsverhalten kann durch Eigenschaften von <code>"properties":</code> gesteuert werden.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### colors

Diese Eigenschaften definieren die Farben, die in verschiedenen Teilen des Browsers verwendet werden. Sie sind alle optional. Wie diese Eigenschaften die Benutzeroberfläche von Firefox beeinflussen, wird hier gezeigt:

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <td>
        <p>
          <img
            alt="Übersicht über die Farbeigenschaften und ihre Anwendung auf Firefox-UI-Komponenten"
            src="themes_components_annotations.png"
          />
        </p>
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> Wenn eine Komponente von mehreren Farbeigenschaften beeinflusst wird, sind die Eigenschaften in Vorzugsreihenfolge aufgelistet.

Alle diese Eigenschaften können entweder als String angegeben werden, der einen gültigen [CSS-Farbstring](/de/docs/Web/CSS/color_value) (einschließlich hexadezimal) enthält, oder als RGB-Array, z. B. `"tab_background_text": [ 107 , 99 , 23 ]`.

> **Hinweis:** [In Chrome dürfen Farben nur als RGB-Arrays angegeben werden](#chrome-kompatibilität).
>
> In Firefox für Android können Farben mit Folgenotation angegeben werden:
>
> - volle hexadezimale Notation, d.h. nur #RRGGBB. _alpha_ und verkürzte Syntax wie #RGB\[A] werden nicht unterstützt.
> - [Funktionelle Notation](/de/docs/Web/CSS/color_value#rgb_syntax_variations) (RGB-Arrays) für Themes, die auf Firefox 68.2 oder neuer abzielen.
>
> Farben für Firefox für Android-Themes können nicht unter Verwendung von Farbnamen angegeben werden.

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
          <code>tab_text</code> nicht definiert ist, legt es auch die Farbe des aktiven
          Tab-Textes und, wenn <code>icons</code> nicht definiert ist, die Farbe der
          Toolbar-Symbole fest. Wird als Chrome-kompatibler Alias für
          <code>toolbar_text</code> bereitgestellt.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass jede verwendete Farbe gut mit
            den in <code>frame</code> und <code>frame_inactive</code> oder
            <code>toolbar</code> verwendeten Farben kontrastiert, wenn Sie diese Eigenschaft verwenden.
          </p>
          <p>
            Wenn <code>icons</code> nicht definiert ist, stellen Sie auch einen guten Kontrast zu <code>
            button_background_active</code> und <code>button_background_hover</code> sicher.
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
            alt="Der Browser Firefox ist schwarz. Die Registerkarte des Browsers ist schwarz mit weißem Text. Die URL-Leiste und die die Seite-durchsuchen-Leiste sind weiß mit schwarzem Text, aber die Symbole des Browsers und der die Seite-durchsuchen-Leiste sind rot."
            src="theme-bookmark_text.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_active</code></td>
      <td>
        <p>Die Hintergrundfarbe der gedrückten Toolbar-Buttons.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Symbol in der Symbolleiste anpassen in der URL-Leiste ist weiß mit einem roten Hintergrund und wird gedrückt. Es erscheint ein Popup mit einer kurzen Liste von Dingen, die zur Symbolleiste hinzugefügt werden können, wie z.B. die Bibliothek des Browsers und die Seitenleisten." src="theme-button_background_active.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>button_background_hover</code></td>
      <td>
        <p>Die Hintergrundfarbe der Toolbar-Buttons beim Hover.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Zurück-Symbol ist weiß mit einem roten Kreis auf dem Hintergrund." src="theme-button_background_hover.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons</code></td>
      <td>
        <p>Die Farbe der Toolbar-Symbole, mit Ausnahme der in der Suchtoolbar.</p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Die URL-Leiste und Öffnen-Symbol sind rot. Die roten Symbole stehen im guten Kontrast zum schwarzen Hintergrund des Headerbereichs." src="theme-icons.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>icons_attention</code></td>
      <td>
        <p>
          Die Farbe der Toolbar-Symbole im Aufmerksamkeitszustand, wie dem
          gesicherten Lesezeichen-Symbol oder dem abgeschlossenen Download-Symbol.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den in <code>frame</code>, <code>frame_inactive</code>,
            <code>button_background_active</code> und
            <code>button_background_hover</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind grau mit weißem Text. Das Lesezeichen-zeichen für diese Seite ist rot und gedrückt, ein offenes Popup namens Bearbeiten dieses Lesezeichens wird angezeigt. Während des Aufmerksamkeit-Zustands stehen die Toolbar-Symbole gut im Kontrast zum schwarzen Hintergrund des Headerbereichs." src="theme-icons_attention.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>
        <p>
          Die Farbe des Headerbereichs-Hintergrunds, der in dem Teil des
          Headers angezeigt wird, der nicht durch die in
          <code>"theme_frame"</code> und <code>"additional_backgrounds"</code> angegebenen
          Bilder abgedeckt ist oder durch sie sichtbar ist.
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
        <p><img alt="Der Browser Firefox ist rot mit weißem Text. Die Registerkarten des Browsers sind hellroter, ebenfalls mit weißem Text. Die URL-Leiste ist sehr hellrot mit schwarzem Text." src="theme-frame.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>frame_inactive</code></td>
      <td>
        <p>
          Die Farbe des Headerbereichs-Hintergrunds, wenn das Browserfenster
          inaktiv ist, angezeigt in dem Teil des Headers, der nicht durch oder
          sichtbar durch die in <code>"theme_frame"</code> und
          <code>"additional_backgrounds"</code> angegebenen Bilder ist.
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
            alt="Der Browser Firefox ist grau. Die Registerkarten und die URL-Leiste des Browsers sind heller grau. Die Registerkarten-Text ist weiß und die Symbolleiste der URL-Leiste sind dunkler grau."
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Die Hintergrundfarbe der Seite ist rot." src="ntp-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_card_background</code></td>
      <td>
        <p>Die Hintergrundfarbe der neuen Tab-Karte.</p>
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Auf der Seite ist der Hintergrund zur Suchleiste und den Schnellzugriff-Tasten rot." src="ntp-card-background.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>ntp_text</code></td>
      <td>
        <p>Die Textfarbe der neuen Tab-Seite.</p>
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
        <p><img alt="Firefox zeigt eine neue Tab-Seite. Auf der Seite ist der Text in Rot." src="ntp-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Popups (wie dem Dropdown-Menü der URL-Leiste und den
          Pfeilpanelen).
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau, mit weißen Symbolen und Text. Das Symbol 'Diese Seite als Lesezeichen hinzufügen' ist blau und wird gedrückt, ein offenes Popup namens 'Dieses Lesezeichen bearbeiten' wird mit rotem Hintergrund angezeigt. Die Hintergrundfarbe des Popups ist rot." src="theme-popup.png" /></p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Das Symbol 'Diese Seite als Lesezeichen hinzufügen' ist blau und wird gedrückt, ein offenes Popup namens 'Dieses Lesezeichen bearbeiten' wird mit roter Umrandung und schwarzem Hintergrund angezeigt. Der Rand des Popups ist rot." src="theme-popup_border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_highlight</code></td>
      <td>
        <p>
          Die Hintergrundfarbe von Elementen, die mit der Tastatur in Popups hervorgehoben werden (wie das ausgewählte Dropdown-Element der URL-Leiste).
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
        <p><img alt="Screenshot von Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit dem Hintergrund des hervorgehobenen Elements in rot. Die Hintergrundfarbe des hervorgehobenen Elements im Popup ist rot." src="theme-popup_highlight.png" /></p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit dem Text des hervorgehobenen Elements in rot vor schwarzem Hintergrund. Die Textfarbe des hervorgehobenen Elements im Popup-Kontrastiert steht gut im Kontrast zur schwarzen Hintergrundfarbe." src="theme-popup_highlight_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>popup_text</code></td>
      <td>
        <p>Die Textfarbe der Popups.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind heller grau mit weißen Symbolen und Text. Ein Suchergebnis-Popup wird angezeigt mit den Texten der Elemente in rot. Die Textfarbe steht im guten Kontrast zur schwarzen Hintergrundfarbe des Popups." src="popup_text.png" /></p>
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
        <p><img alt="Ein Nahaufnahmefoto des geöffneten Sidebars eines Browserfensters. Die Hintergrundfarbe der Sidebar ist rot." src="sidebar-colors.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_border</code></td>
      <td>
        <p>Die Rand- und Splitterfarbe der Browser-Sidebar</p>
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
        <p><img alt="Ein Nahaufnahme des Firefox-Browsers der Lesezeichen-Sidebar mit einem roten horizontalen Trennzeichen zwischen dem Sidebar-Titel und dem Sidebar-Menü. Die Rand- und Splitplatte-Farbe der Sidebar ist rot." src="sidebar-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight</code></td>
      <td>
        <p>Die Hintergrundfarbe von hervorgehobenen Zeilen in Sidebars</p>
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
        <p><img alt="Ein Nahaufnahme des Firefox-Browsers der Lesezeichen-Sidebar mit einem hervorgehobenen Eintrag. Die Hintergrundfarbe einer hervorgehobenen Zeile in der Sidebar ist rot mit weißem Text." src="sidebar-highlight.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_highlight_text</code></td>
      <td>
        <p>Die Textfarbe von hervorgehobenen Zeilen in Sidebars.</p>
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
    "sidebar_highlight_text": "red"
  }
}</pre
          >
        </details>
        <p><img alt="Ein Nahaufnahme des Firefox-Browsers der Lesezeichen-Sidebar mit einem hervorgehobenen Eintrag. Die Textfarbe einer hervorgehobenen Zeile in der Sidebar ist rot. Die Textfarbe steht im guten Kontrast zur pinkfarbenen Hintergrundfarbe der hervorgehobenen Zeile." src="sidebar-highlight-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>sidebar_text</code></td>
      <td>
        <p>Die Textfarbe der Seitenleiste.</p>
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
        <p><img alt="Ein Nahaufnahmebild eines geöffneten Browserfensters der Sidebar. Die Textfarbe in der Sidebar ist weiß. Die Textfarbe steht im guten Kontrast zur roten Hintergrundfarbe der Sidebar." src="sidebar-colors.png" /></p>
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
            ab Firefox 89 nicht unterstützt.
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
            alt="Ein Nahaufnahmebild von Browsertabs, um den Trennstrich hervorzuheben."
            src="theme-tab-background-separator.png"
          />
        </p>
      </td>
    </tr>
    <tr>
      <td><code>tab_background_text</code></td>
      <td>
        <p>
          Die Farbe des in den inaktiven Seiten-Tabs angezeigten Textes. Wenn
          <code>tab_text</code> oder <code>bookmark_text</code> nicht angegeben ist,
          gilt das für den aktiven Tab-Text.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den in <code>tab_selected</code> oder <code>frame</code> und
            <code>frame_inactive</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Tabs und die URL-Leiste des Browsers sind weiß mit roten Symbolen und rotem Text. Die Farbe des Textes im geöffneten Tab ist rot. Die Textfarbe steht im guten Kontrast zur schwarzen Hintergrundfarbe des Tabs." src="theme-tab_background_text.png" /></p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit heller grauen Symbolen und weißem Text. Der ausgewählte Tab hat eine rote Umrandung." src="theme-tab_line.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_loading</code></td>
      <td>
        <p>Die Farbe des Tabs-Ladeindikators und des Tabs-Ladeburst.</p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in Weiß. Innerhalb des ausgewählten Tabs ein animierter Ladeindikator ist rot." src="theme-tab_loading.gif" /></p>
      </td>
    </tr>
    <tr>
      <td><code>tab_selected</code></td>
      <td>
        <p>
          Die Hintergrundfarbe des ausgewählten Tabs. Wenn nicht verwendet, wird die ausgewählte Tab-Farbe durch <code>frame</code> und die
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind dunkler grau mit Symbolen und Text in Weiß. Der ausgewählte Tab hat einen roten Hintergrund und weißen Text." src="theme-tab_selected.png" /></p>
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
            den in <code>tab_selected</code> oder <code>frame</code> und
            <code>frame_inactive</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Der Browser Firefox hat ein Insektenthema. Die URL-Leiste ist heller grau mit weißen Symbolen. Der Text des ausgewählten Tabs ist rot mit weißem Hintergrund." src="theme-tab_text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar</code></td>
      <td>
        <p>
          Die Hintergrundfarbe für die Navigationsleiste, die Lesezeichenleiste und
          den ausgewählten Tab.
        </p>
        <p>Dies setzt auch die Hintergrundfarbe der "Finde"-Leiste fest.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarte, die Seite-durchsuchen-Leiste und die URL-Leiste des Browsers sind rot mit weißem Text und Symbolen, außer der Seite-durchsuchen-Leiste, wo Text und Symbol schwarz sind." src="toolbar.png" /></p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind heller grau mit weißen Text und Symbolen. Eine horizontale rote Linie trennt den unteren Teil der Toolbar vom Anfang der Anzeige der Webseite." src="theme-toolbar_bottom_separator.png" /></p>
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
          <strong>Seite-durchsuchen</strong>-Feldes fest.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarte, die Seite-durchsuchen-Leiste und die URL-Leiste des Browsers sind heller grau mit weißen Text und Symbolen. Die Hintergrundfarbe der URL-Leiste ist rot. Die Seite-durchsuchen-Leiste ist weiß mit schwarzem Text. Das Seite-durchsuchen-Feld ist rot mit schwarzem Text." src="toolbar-field.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border</code></td>
      <td>
        <p>Die Randfarbe für Felder in der Toolbar.</p>
        <p>
          Dies setzt auch die Randfarbe des
          <strong>Seite-durchsuchen</strong>-Feldes fest.
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit weißen Text und Symbolen. Die URL-Leiste und Seite-durchsuchen-Felder sind mit rot umrandet." src="toolbar-field-border.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_border_focus</code></td>
      <td>
        <p>Die fokussierte Randfarbe für Felder in der Toolbar.</p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste sind schwarz mit weißen Symbolen und Text. Das URL-Leiste Feld ist fokussiert und mit rotem Rand umgeben." src="theme-toolbar_field_border_focus.png" /></p>
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
        <p><img alt="Der Browser Firefox ist schwarz. Die Registerkarten, die Seite-durchsuchen-Leiste und die URL-Leiste sind schwarz mit weißen Text und Symbolen. Die Hintergrundfarbe der fokussiertem URL-Bar ist rot und der Text ist weiß." src="theme-toolbar_field_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight</code></td>
      <td>
        Die Hintergrundfarbe, die verwendet wird, um die aktuelle Auswahl von Text in
        der URL-Leiste anzuzeigen (und in der Suchleiste, wenn sie so konfiguriert ist, dass sie separat ist).
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
            alt="Der Browser Firefox ist weiß. Die Registerkarten und die URL-Leiste sind weiß mit Text und Symbolen in schwarz. Die URL-Leiste ist fokussiert und mit blauem Rand gezeichnet und der Text der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier gibt das Feld <code>toolbar_field_highlight</code> an, dass
          die Hervorhebungsfarbe ein helles Grün ist, während der Text mit
          <code>toolbar_field_highlight_text</code> auf ein dunkles bis mittleres Grün eingestellt ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_highlight_text</code></td>
      <td>
        <p>
          Die Farbe, die verwendet wird, um den Text zu zeichnen, der derzeit in der URL-Leiste
          (und in der Suchleiste, wenn sie so konfiguriert ist, dass sie separat ist) ausgewählt ist.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den in <code>toolbar_field_highlight</code> verwendeten Farben kontrastiert.
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
            alt="Der Browser Firefox ist weiß. Die Registerkarten und die URL-Leiste sind weiß mit Text und Symbolen in schwarz. Die URL-Leiste ist fokussiert und mit blauem Rand gezeichnet und der Text der URL-Leiste ist ausgewählt."
            src="toolbar_field_highlight.png"
          />
        </p>
        <p>
          Hier wird das Feld <code>toolbar_field_highlight_text</code> verwendet,
          um die Textfarbe auf ein dunkel bis mittelgrün zu setzen,
          während die Hervorhebungsfarbe ein helles Grün ist.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_separator</code> {{Deprecated_Inline}}</td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Warnung:</strong> <code>toolbar_field_separator</code> wird
            ab Firefox 89 nicht unterstützt.
          </p>
        </div>
        <p>
          Die Farbe der Trennzeichen innerhalb der URL-Leiste. In Firefox 58 wurde dies
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser Firefox ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Innerhalb des weißen URL-Leiste-Feldes, nach dem Reader-Mode-Symbol ist eine rote vertikale Linie, die den Rest der URL-Leiste-Symbole trennt. Die Farbe der vertikalen Trennlinie innerhalb der URL-Leiste ist rot." src="theme-toolbar_field_separator.png" /></p>
        <p>
          In diesem Screenshot ist <code>"toolbar_vertical_separator"</code> die
          rote vertikale Linie in der URL-Leiste, die das Symbol für den Reader-Modus von
          den anderen Symbolen trennt.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text</code></td>
      <td>
        <p>
          Die Farbe des Textes in Feldern in der Toolbar, wie der URL-Leiste. Dies
          setzt auch die Farbe des Textes im
          <strong>Seite-durchsuchen</strong>-Feld fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den in <code>toolbar_field</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem offenen Tab. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit weißen Text und Symbolen. Der Text innerhalb der URL-Leiste ist rot. Die Symbole und Seite-durchsuchen-Feld haben roten Text mit schwarzem Hintergrund." src="toolbar-field-text.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_field_text_focus</code></td>
      <td>
        <p>
          Die Farbe des Textes in fokussierten Feldern in der Toolbar, wie die URL-Leiste.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Stellen Sie sicher, dass die verwendete Farbe gut mit
            den in <code>toolbar_field_focus</code> verwendeten Farben kontrastiert.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit zwei geöffneten Tabs. Der Browser ist schwarz. Die Registerkarten und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die URL-Leiste ist fokussiert; der Text und die Symbole des URL-Leiste sind rot mit schwarzen Hintergrund." src="theme-toolbar_field_text_focus.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_text</code></td>
      <td>
        <p>
          Die Farbe des Toolbar-Textes. Dies setzt auch die Farbe des Textes
          in der "Finde"-Leiste fest.
        </p>
        <div class="notecard note">
          <p>
            <strong>Hinweis:</strong> Zur Kompatibilität mit Chrome,
            verwenden Sie den Alias <code>bookmark_text</code>.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarte, die Seite-durchsuchen-Leiste und die URL-Leiste des Browsers sind schwarz mit rotem Text und Symbolen. Der Text innerhalb des aktiven Tabs, der Navigationsleiste und der Suchleiste ist rot." src="toolbar-text.png" /></p>
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind schwarz mit weißen Text und Symbolen. Eine rote Linie trennt den oberen Teil der URL-Leiste vom Browser." src="theme-toolbar_top_separator.png" /></p>
      </td>
    </tr>
    <tr>
      <td><code>toolbar_vertical_separator</code></td>
      <td>
        <p>
          Die Farbe des Separators in der Lesezeichen-Symbolleiste. In Firefox 58 entspricht
          dies der Farbe der Trennzeichen innerhalb der URL-Leiste.
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
        <p><img alt="Ein Screenshot eines Browserfensters mit einem geöffneten Tab. Der Browser ist schwarz. Die Registerkarte und die URL-Leiste des Browsers sind schwarz mit Text und Symbolen in weiß. Die Farbe der vertikalen Linie, die die Lesezeichen-Symbolleiste vom Inhalt rechts trennt, ist rot." src="theme-toolbar_vertical_separator.png" /></p>
      </td>
    </tr>
  </tbody>
</table>

#### Aliasse

Zusätzlich akzeptiert dieser Schlüssel verschiedene Eigenschaften, die Aliasse für eine der oben genannten Eigenschaften sind. Diese werden zur Kompatibilität mit Chrome bereitgestellt. Wenn ein Alias angegeben wird und die Nicht-Alias-Version ebenfalls angegeben ist, wird der Wert aus der Nicht-Alias-Version übernommen.

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
          Ein Array von Enumerationswerten, das die Ausrichtung des
          entsprechenden <code>"additional_backgrounds":</code>-Array-Elements definiert.<br />Die
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
        <p>Wenn nicht angegeben, wird auf <code>"right top"</code> standardmäßig festgelegt.</p>
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
        <p>Wenn nicht angegeben, wird auf <code>"no-repeat"</code> standardmäßig festgelegt.</p>
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
          und den Inhalt (z. B. eingebaute Seiten und das bevorzugte Farbschema für Webseiten) angewendet wird.
          Optionen umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend auf dem Theme automatisch.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – verwendet das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird auf <code>"auto"</code> standardmäßig festgelegt.</p>
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
          Bestimmt, welches Farbschema auf den Inhalt angewendet wird (z. B. eingebaute Seiten und
          bevorzugtes Farbschema für Webseiten). Überschreibt <code>color_scheme</code>. Optionen
          umfassen:
        </p>
        <ul>
          <li><code>"auto"</code> – ein helles oder dunkles Schema basierend auf dem Theme automatisch.</li>
          <li><code>"light"</code> – ein helles Schema.</li>
          <li><code>"dark"</code> – ein dunkles Schema.</li>
          <li><code>"system"</code> – das Systemschema.</li>
        </ul>
        <p>Wenn nicht angegeben, wird auf <code>"auto"</code> standardmäßig festgelegt.</p>
      </td>
    </tr>
  </tbody>
</table>

## Beispiele

Ein grundlegendes Theme muss ein Bild definieren, das zum Header hinzugefügt wird, die Akzentfarbe, die im Header verwendet wird, und die Textfarbe, die im Header verwendet wird:

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

Mehrere Bilder können verwendet werden, um den Header zu füllen. Vor Firefox-Version 60 verwenden Sie ein leeres oder transparentes Headerbild, um die Platzierung jedes zusätzlichen Bildes zu steuern:

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

Sie können den Header auch mit einem wiederholten Bild oder Bildern füllen, in diesem Fall ein einzelnes Bild, das in der Mitte oben im Header verankert und über den Rest des Headers wiederholt wird:

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

Es wird Ihnen einen Browser geben, der so aussieht:

![Ein Browserfenster mit zwei geöffneten Tabs und einer dunkelgrünen Hintergrundfarbe im Headerbereich. Der inaktive Tab hat weißen Text. Der aktive Tab und die Toolbar haben eine blaue Hintergrundfarbe mit cyanfarbenem Text. Die URL-Leiste hat einen orangefarbenen Hintergrund mit weißen Rändern, eine grüne Textfarbe und einen weißen vertikalen Liniensönner. Eine rote Linie wird verwendet, um die Tabs oben zu trennen, und eine weiße Linie, um die Tabs von dem darunter liegenden Inhalt zu trennen.](theme.png)

In diesem Screenshot ist `"toolbar_vertical_separator"` die weiße vertikale Linie in der URL-Leiste, die das Reader-Modus-Symbol von den anderen Symbolen trennt.

## Browser-Kompatibilität

{{Compat}}

### Chrome-Kompatibilität

In Chrome:

- `colors/toolbar_text` wird nicht verwendet, verwenden Sie stattdessen `colors/bookmark_text`.
- `images/theme_frame` verankert das Bild an der oberen linken Ecke des Headers und wenn das Bild den Headerbereich nicht ausfüllt, wird das Bild gekachelt.
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

  Ab Firefox 59 werden sowohl die Array-Form als auch die CSS-Farbform für alle Eigenschaften akzeptiert. Davor erforderten `colors/frame` und `colors/tab_background_text` die Array-Form, während andere Eigenschaften die CSS-Farbform erforderten.
