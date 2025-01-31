---
title: orientation
slug: Web/Manifest/Reference/orientation
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `orientation` Manifestmitglied wird verwendet, um die Standardausrichtung Ihrer Webanwendung festzulegen. Es definiert, wie die App beim Start und während der Nutzung in Bezug auf die Bildschirmausrichtung des Geräts angezeigt werden soll, insbesondere auf Geräten, die mehrere Ausrichtungen unterstützen.

> [!NOTE]
> Die Ausrichtung der App kann zur Laufzeit auf verschiedene Weise geändert werden, zum Beispiel durch die Nutzung der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

## Syntax

```json-nolint
/* Keyword values */
"orientation": "any"
"orientation": "natural"
"orientation": "portrait"
"orientation": "portrait-primary"
"orientation": "portrait-secondary"
"orientation": "landscape"
"orientation": "landscape-primary"
"orientation": "landscape-secondary"
```

### Werte

- `orientation`

  - : Ein String, der die Standardausrichtung der Web-Anwendung angibt.
    Wenn das `orientation` Mitglied nicht angegeben oder ein ungültiger Wert bereitgestellt wird, nutzt die Web-Anwendung typischerweise die natürliche Ausrichtung des Geräts und alle benutzer- oder systemseitigen Ausrichtungseinstellungen.

    Der `orientation` Wert muss eines der folgenden Schlüsselwörter sein:

    - `any`

      - : Zeigt die Web-App in jeder vom Betriebssystem oder den Benutzereinstellungen erlaubten Ausrichtung an.
        Es ermöglicht der App, sich frei zu drehen, um die Ausrichtung des Geräts anzupassen, wenn es gedreht wird.

    - `natural`

      - : Zeigt die Web-App in der Ausrichtung an, die als die natürlichste für das Gerät gilt, bestimmt durch den Browser, das Betriebssystem, Benutzereinstellungen oder das Display selbst. Es entspricht der Art und Weise, wie das Gerät am häufigsten gehalten oder genutzt wird:

        - Auf Geräten, die typischerweise vertikal gehalten werden (z. B. Smartphones), ist `natural` normalerweise `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal genutzt werden (z. B. Computerbildschirme und Tablets), ist `natural` normalerweise `landscape-primary`.

        Wenn das Gerät gedreht wird, kann sich die App drehen oder auch nicht, um sich der natürlichen Ausrichtung des Geräts anzupassen; dieses Verhalten kann je nach spezifischem Gerät, Browser-Implementierung und Benutzereinstellungen variieren.

    - `portrait`

      - : Zeigt die Web-App mit einer Höhe größer als der Breite an.
        Es erlaubt der App, zwischen den Ausrichtungen `portrait-primary` und `portrait-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`

      - : Zeigt die Web-App im Hochformatmodus an, typischerweise mit aufrecht gehaltenem Gerät.
        Dies ist normalerweise die Standard-App-Ausrichtung auf Geräten, die natürlich im Hochformat sind.
        Abhängig vom Gerät und der Browser-Implementierung bleibt die App typischerweise in dieser Ausrichtung, auch wenn das Gerät gedreht wird.

    - `portrait-secondary`

      - : Zeigt die Web-App im umgekehrten Hochformatmodus an, was `portrait-primary` um 180 Grad gedreht ist.
        Abhängig vom Gerät und der Browser-Implementierung bleibt die App typischerweise in dieser Ausrichtung, auch wenn das Gerät gedreht wird.

    - `landscape`

      - : Zeigt die Web-App mit einer Breite größer als der Höhe an.
        Es erlaubt der App, zwischen den Ausrichtungen `landscape-primary` und `landscape-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`

      - : Zeigt die Web-App im Querformatmodus an, typischerweise mit dem Gerät in seiner Standard-Horizontalposition.
        Dies ist normalerweise die Standard-App-Ausrichtung auf Geräten, die natürlich im Querformat sind.
        Abhängig vom Gerät und der Browser-Implementierung bleibt die App typischerweise in dieser Ausrichtung, auch wenn das Gerät gedreht wird.

    - `landscape-secondary`

      - : Zeigt die Web-App im umgekehrten Querformatmodus an, was `landscape-primary` um 180 Grad gedreht ist.
        Abhängig vom Gerät und der Browser-Implementierung bleibt die App typischerweise in dieser Ausrichtung, auch wenn das Gerät gedreht wird.

## Beschreibung

Um das `orientation` Manifestmitglied zu verstehen, ist es wichtig, mit den folgenden ausrichtungsbezogenen Konzepten vertraut zu sein:

- **Geräteausrichtung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmausrichtung**: Definiert die physische Ausrichtung des Displays des Geräts.
- **App-Ausrichtung**: Definiert, wie der Inhalt der App relativ zur Bildschirmausrichtung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert sich typischerweise die Bildschirmausrichtung. Zum Beispiel führt das Drehen eines Smartphones von vertikal nach horizontal normalerweise dazu, dass der Bildschirm vom Hoch- ins Querformat wechselt. Ohne eine spezifische Ausrichtungseinstellung im Manifest passen die meisten Apps ihr Layout an, um diese neue Bildschirmausrichtung zu berücksichtigen.

Das `orientation` Mitglied des Manifests ermöglicht es Ihnen zu steuern, wie Ihre App auf diese Änderungen reagiert. Indem Sie eine bevorzugte Ausrichtung für Ihre App angeben, können Sie entscheiden, ob Ihre App sich an Veränderungen der Bildschirmausrichtung anpassen oder ein festes Layout beibehalten soll, unabhängig davon, wie das Gerät gehalten wird. Wenn Sie z. B. `"orientation": "portrait-primary"` festlegen, können Sie angeben, dass Sie bevorzugen, dass Ihre App immer im aufrechten Hochformatmodus relativ zum Bildschirm angezeigt wird, selbst wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz nach Möglichkeit zu berücksichtigen.

Das untenstehende Beispiel zeigt, wie das Layout einer Web-App erscheinen könnte, wenn ein Smartphone gedreht wird. Für dieses Beispiel nehmen Sie an, dass der Wert der App `orientation` auf `any` gesetzt ist, was der App erlaubt, zwischen allen `orientation` Werten zu rotieren, wenn das Smartphone gedreht wird. Nehmen Sie auch an, dass sowohl das Telefon als auch der Browser alle Ausrichtungen unterstützen. Die Sequenz zeigt eine Drehung des Telefons im Uhrzeigersinn, mit jeder Position ausgehend von der Startposition, wie folgt:

- Oben links: `portrait-primary` (Startposition)
- Oben rechts: `landscape-primary` (90 Grad)
- Unten links: `portrait-secondary` (180 Grad)
- Unten rechts: `landscape-secondary` (270 Grad)

```html hidden
<div class="container">
  <div class="orientation">
    <div class="device portrait-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-primary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-primary</code></div>
  </div>
  <div class="orientation">
    <div class="device portrait-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted portrait mode</div>
      </div>
    </div>
    <div class="label"><code>portrait-secondary</code></div>
  </div>
  <div class="orientation">
    <div class="device landscape-secondary">
      <div class="screen">
        <div class="title-bar">App Title Bar</div>
        <div class="content">App content in inverted landscape mode</div>
      </div>
    </div>
    <div class="label"><code>landscape-secondary</code></div>
  </div>
</div>
```

```css hidden
.container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 20px;
}

.orientation {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}

.device {
  width: 200px;
  height: 300px;
  border: 5px solid black;
  border-radius: 20px;
  position: relative;
  background-color: white;
  margin-bottom: 10px;
}

.screen {
  width: 180px;
  height: 280px;
  border-radius: 15px;
  background-color: lightgrey;
  margin: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}

.title-bar {
  background-color: #4285f4;
  color: white;
  padding: 5px;
  text-align: center;
  font-weight: bold;
}

.content {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  text-align: center;
}

.landscape-primary,
.landscape-secondary {
  width: 300px;
  height: 200px;
}

.landscape-primary .screen,
.landscape-secondary .screen {
  width: 280px;
  height: 180px;
}

.portrait-secondary {
  transform: rotate(180deg);
}

.landscape-secondary {
  transform: rotate(180deg);
}

.label {
  margin-top: 10px;
  font-family: Arial, sans-serif;
  font-size: 15px;
}
```

{{EmbedLiveSample('Description', '', 800)}}

### Umfang und Standardverhalten

Die angegebene `orientation` wird auf alle oberen {{Glossary("Browsing_context", "Browsing-Kontexte")}} der Web-App angewendet.

Wenn ein Browser den angegebenen `orientation` Wert unterstützt, wird dieser während der gesamten Lebensdauer der App als Standard-App-Ausrichtung verwendet, es sei denn, er wird zur Laufzeit überschrieben. Dies bedeutet, dass Browser bei jeder Navigation im oberen Browsing-Kontext zu dieser Standardausrichtung zurückkehren.

### Auswahl einer bevorzugten Ausrichtung für Ihre Web-App

Durch das Festlegen einer bestimmten Ausrichtung können Sie sicherstellen, dass Ihre Web-App optimal für ihren Inhalt und die Benutzeroberfläche angezeigt wird. Zum Beispiel ist eine Video-App oft besser für die Querformatausrichtung geeignet, während eine Lese-App typischerweise im Hochformat besser funktioniert.

Das Nicht-Spezifizieren einer Ausrichtung kann auch eine bewusste Entscheidung sein, damit sich Ihre Web-App flexibel an verschiedene Geräte und Benutzervorlieben anpassen kann.

### `orientation` im Manifest vs. Verhalten der Screen Orientation API

Während das `orientation` Manifestmitglied die Standardausrichtung der Web-App festlegt, kann die Ausrichtung eines oberen Browsing-Kontexts geändert werden, sobald die Web-App läuft, indem die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) verwendet wird.

Die `orientation` Werte sind im Web-App-Manifest und der Screen Orientation API ähnlich, aber ihr Verhalten und ihre Zwecke unterscheiden sich.

- Web-App-Manifest:

  - Schlägt die bevorzugte Standardausrichtung der Web-App unter Verwendung des `orientation` Manifestmitglieds vor.
  - Legt die initiale Ausrichtung beim Start der App fest.

- Screen Orientation API:

  - Verwendet Ausrichtungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Erlaubt dynamische Änderungen der Ausrichtung zur Laufzeit (zum Beispiel das Sperren der Ausrichtung mit [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)).

  > [!NOTE]
  > Die Methode [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) der Screen Orientation API hat begrenzte Unterstützung in verschiedenen Browsern.
  > Überprüfen Sie die Kompatibilität, wenn Sie planen, die Bildschirmorientierung zur Laufzeit dynamisch zu ändern.

### Plattform- und Browserbeschränkungen

Wenn Sie die Ausrichtungspräferenz für Ihre App hinzufügen, bedenken Sie die folgenden Überlegungen und Einschränkungen:

- Browseranbieter und Gerätehersteller entscheiden, welche Ausrichtungen und [`display`](/de/docs/Web/Manifest/Reference/display) Modi kompatibel sind.
- Bestimmte UI/UX-Anliegen und Plattformkonventionen können einschränken, welche Bildschirmorientierungen und Anzeigemodi zusammen verwendet werden können.
- Die Unterstützung für spezifische `orientation` Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation` Werte, wie `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht, die Standardausrichtung einer Web-App zu ändern, während sie in bestimmten Anzeigemodi ist (z. B. [`"display": "browser"`](/de/docs/Web/Manifest/Reference/display#browser)).

## Beispiele

### Festlegen einer festen Ausrichtung für eine Web-App

Dieses Beispiel legt die Ausrichtung der App auf `portrait-primary` fest. Angenommen, Browser und Gerätesupport sind vorhanden, wird die App immer im aufrechten Hochformatmodus angezeigt, auch wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Festlegen einer flexiblen Ausrichtung für eine Web-App

Betrachten Sie eine Fotoanzeige- und Bearbeitungs-App. Im App-Manifest, wie unten gezeigt, ist `orientation` auf `any` gesetzt. Dadurch kann die App in der aktuellen Ausrichtung des Geräts gestartet werden und sich an sowohl `portrait` als auch `landscape` Ausrichtungen anpassen, wenn Nutzer ihre Geräte drehen. Dieses `orientation` Setting ermöglicht es Benutzern, Fotos bequem in der jeweils am besten geeigneten Ausrichtung anzuzeigen und zu bearbeiten.

```json
{
  "name": "PhotoGallery Pro",
  "short_name": "PhotoGal",
  "description": "A professional photo gallery and editing application",
  "start_url": "/index.html",
  "display": "standalone",
  "orientation": "any",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    }
  ],
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.photogallery"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API)
- [Verwaltung der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung von Media Queries für die Geräteausrichtung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Lernen: Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
