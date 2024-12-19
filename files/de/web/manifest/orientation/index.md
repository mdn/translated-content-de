---
title: orientation
slug: Web/Manifest/orientation
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `orientation`-Manifest-Mitglied wird verwendet, um die Standardausrichtung Ihrer Webanwendung festzulegen. Es definiert, wie die App beim Start und während der Nutzung im Verhältnis zur Bildschirmausrichtung des Geräts angezeigt werden soll, insbesondere auf Geräten, die mehrere Ausrichtungen unterstützen.

> [!NOTE]
> Die Ausrichtung der App kann während der Laufzeit auf verschiedene Weise geändert werden, beispielsweise durch die Verwendung der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

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

  - : Ein String, der die Standardausrichtung für die Web-App angibt. Wenn das `orientation`-Mitglied nicht angegeben oder ein ungültiger Wert angegeben wird, verwendet die Web-App in der Regel die natürliche Ausrichtung des Geräts und jegliche Benutzer- oder Systemeinstellungen zur Ausrichtung.

    Der `orientation`-Wert muss eines der folgenden Schlüsselwörter sein:

    - `any`

      - : Zeigt die Web-App in jeder vom Betriebssystem des Geräts oder den Benutzereinstellungen erlaubten Ausrichtung an. Es erlaubt der App, sich frei zu drehen, um die Ausrichtung des Geräts anzupassen, wenn dieses gedreht wird.

    - `natural`

      - : Zeigt die Web-App in der Ausrichtung an, die für das Gerät am natürlichsten ist, wie vom Browser, Betriebssystem, den Benutzereinstellungen oder dem Bildschirm selbst bestimmt. Dies entspricht der Art und Weise, wie das Gerät am häufigsten gehalten oder verwendet wird:

        - Auf Geräten, die typischerweise vertikal gehalten werden, wie Mobiltelefone, ist `natural` normalerweise `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal verwendet werden, wie Computermonitore und Tablets, ist `natural` normalerweise `landscape-primary`.

        Wenn das Gerät gedreht wird, kann es sein, dass die App sich mitdreht, um die natürliche Ausrichtung des Geräts beizubehalten; dieses Verhalten kann je nach spezifischem Gerät, Browser-Implementierung und Benutzereinstellungen variieren.

    - `portrait`

      - : Zeigt die Web-App mit einer größeren Höhe als Breite an. Es erlaubt der App, zwischen den Ausrichtungen `portrait-primary` und `portrait-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`

      - : Zeigt die Web-App im Hochformatmodus an, typischerweise mit dem Gerät aufrecht gehalten. Dies ist normalerweise die Standardorientierung der App auf Geräten, die von Natur aus im Hochformat sind. Je nach Gerät und Browser-Implementierung wird die App in der Regel diese Ausrichtung beibehalten, auch wenn das Gerät gedreht wird.

    - `portrait-secondary`

      - : Zeigt die Web-App im umgekehrten Hochformatmodus an, bei dem `portrait-primary` um 180 Grad gedreht ist. Je nach Gerät und Browser-Implementierung wird die App in der Regel diese Ausrichtung beibehalten, auch wenn das Gerät gedreht wird.

    - `landscape`

      - : Zeigt die Web-App mit einer größeren Breite als Höhe an. Es erlaubt der App, zwischen den Ausrichtungen `landscape-primary` und `landscape-secondary` zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`

      - : Zeigt die Web-App im Querformatmodus an, typischerweise mit dem Gerät in der standardmäßigen horizontalen Position gehalten. Dies ist normalerweise die Standardorientierung der App auf Geräten, die von Natur aus im Querformat sind. Je nach Gerät und Browser-Implementierung wird die App in der Regel diese Ausrichtung beibehalten, auch wenn das Gerät gedreht wird.

    - `landscape-secondary`

      - : Zeigt die Web-App im umgekehrten Querformatmodus an, bei dem `landscape-primary` um 180 Grad gedreht ist. Je nach Gerät und Browser-Implementierung wird die App in der Regel diese Ausrichtung beibehalten, auch wenn das Gerät gedreht wird.

## Beschreibung

Um das `orientation`-Manifest-Mitglied zu verstehen, ist es wichtig, mit den folgenden ausrichtungsbezogenen Konzepten vertraut zu sein:

- **Geräteorientierung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmausrichtung**: Definiert die physische Ausrichtung des Bildschirms des Geräts.
- **App-Ausrichtung**: Definiert, wie der Inhalt der App im Verhältnis zur Bildschirmausrichtung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert sich typischerweise die Bildschirmausrichtung. Beispielsweise wechselt das Drehen eines Mobiltelefons von vertikal nach horizontal normalerweise den Bildschirm vom Hoch- ins Querformat. Ohne eine spezifische Ausrichtungseinstellung im Manifest werden die meisten Apps ihr Layout an die neue Bildschirmausrichtung anpassen.

Das `orientation`-Mitglied des Manifests ermöglicht es Ihnen, zu steuern, wie Ihre App auf diese Änderungen reagiert. Durch die Angabe einer bevorzugten Ausrichtung für Ihre App können Sie entscheiden, ob Ihre App auf Änderungen der Bildschirmausrichtung reagieren oder ein festes Layout beibehalten soll, unabhängig davon, wie das Gerät gehalten wird. Beispielsweise können Sie durch die Einstellung `"orientation": "portrait-primary"` angeben, dass Sie es bevorzugen, dass Ihre App immer im aufrechten Hochformat relativ zum Bildschirm angezeigt wird, selbst wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz nach Möglichkeit zu berücksichtigen.

Das folgende Beispiel veranschaulicht, wie das Layout einer Web-App aussieht, wenn ein Mobiltelefon gedreht wird. In diesem Beispiel wird davon ausgegangen, dass der `orientation`-Wert der App auf `any` gesetzt ist, was es der App ermöglicht, sich zwischen allen `orientation`-Werten zu drehen, wenn das Mobiltelefon gedreht wird. Außerdem wird davon ausgegangen, dass sowohl das Telefon als auch der Browser alle Ausrichtungen unterstützen. Die Sequenz zeigt eine Drehung des Telefons im Uhrzeigersinn, wobei jede Position von der Ausgangsposition wie folgt gedreht ist:

- Oben links: `portrait-primary` (Ausgangsposition)
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

Die angegebene `orientation` wird auf alle obersten {{Glossary("Browsing_context", "Browsing-Kontexte")}} der Web-App angewendet.

Wenn ein Browser den angegebenen `orientation`-Wert unterstützt, wird er diesen als Standard-App-Ausrichtung während der Lebensdauer der App verwenden, es sei denn, es wird zur Laufzeit überschrieben. Das bedeutet, dass Browser zu dieser Standardausrichtung zurückkehren, wann immer der oberste Browsing-Kontext navigiert wird.

### Wahl einer bevorzugten Ausrichtung für Ihre Web-App

Durch die Einstellung einer spezifischen Ausrichtung können Sie sicherstellen, dass Ihre Web-App optimal für ihren Inhalt und ihre Benutzeroberfläche angezeigt wird. Beispielsweise ist eine Video-App oft besser für die Querformat-Ausrichtung geeignet, während eine Lese-App typischerweise im Hochformat besser funktioniert.

Das Nicht-Spezifizieren einer Ausrichtung kann auch eine bewusste Entscheidung sein, damit sich Ihre Web-App flexibel an verschiedene Geräte und Benutzerpräferenzen anpasst.

### Manifest `orientation` vs. Verhalten der Screen Orientation API

Während das `orientation`-Manifest-Mitglied die Standardausrichtung der Web-App festlegt, kann die Ausrichtung eines obersten Browsing-Kontextes geändert werden, sobald die Web-App läuft, indem die [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API) verwendet wird.

Die `orientation`-Werte sind im Web-App-Manifest und in der Screen Orientation API ähnlich, aber ihr Verhalten und ihre Zwecke unterscheiden sich.

- Web-App-Manifest:

  - Schlägt die bevorzugte Standardausrichtung der Web-App durch das `orientation`-Manifest-Mitglied vor.
  - Setzt die anfängliche Ausrichtung, wenn die App gestartet wird.

- Screen Orientation API:

  - Verwendet Orientierungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Ermöglicht dynamische Änderungen der Ausrichtung während der Laufzeit (zum Beispiel das Sperren der Ausrichtung mit [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)).

  > [!NOTE]
  > Die Methode [`lock()`](/de/docs/Web/API/ScreenOrientation/lock) der Screen Orientation API wird in den Browsern nur eingeschränkt unterstützt.
  > Überprüfen Sie die Kompatibilität, wenn Sie diese Methode verwenden möchten, um die Bildschirmausrichtung zur Laufzeit dynamisch zu ändern.

### Plattform- und Browservereinschränkungen

Beim Hinzufügen der Ausrichtungspräferenz für Ihre App sollten Sie die folgenden Überlegungen und Einschränkungen beachten:

- Browseranbieter und Gerätehersteller entscheiden, welche Ausrichtungen und [`display`](/de/docs/Web/Manifest/display)-Modi kompatibel sind.
- Bestimmte UI/UX-Bedenken und Plattformkonventionen können einschränken, welche Bildschirmausrichtungen und Anzeigemodi zusammen verwendet werden können.
- Die Unterstützung für spezifische `orientation`-Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation`-Werte, wie `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht das Ändern der Standardausrichtung einer Web-App, während sie sich in bestimmten Anzeigemodi befindet (z.B. [`"display": "browser"`](/de/docs/Web/Manifest/display#browser)).

## Beispiele

### Festlegen einer festen Ausrichtung für eine Web-App

Dieses Beispiel setzt die Ausrichtung der App auf `portrait-primary`. Bei Unterstützung durch Browser und Gerät wird die App immer im aufrechten Hochformat angezeigt, auch wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Festlegen einer flexiblen Ausrichtung für eine Web-App

Betrachten Sie eine Fotoanzeige- und Bearbeitungs-App. In der Manifestdatei der App, wie unten gezeigt, ist `orientation` auf `any` gesetzt. Dies ermöglicht es der App, in der aktuellen Ausrichtung des Geräts gestartet zu werden und sich an sowohl `portrait`- als auch `landscape`-Ausrichtungen anzupassen, während Benutzer ihre Geräte drehen. Diese `orientation`-Einstellung ermöglicht es Benutzern, Fotos bequem in der Ausrichtung zu betrachten und zu bearbeiten, die am besten zur aktuellen Anzeige oder ihrem aktuellen Nutzungskontext passt.

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
- [Verwalten der Bildschirmausrichtung](/de/docs/Web/API/CSS_Object_Model/Managing_screen_orientation)
- [Verwendung von Media Queries für die Geräteorientierung](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Lernen: Responsives Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
