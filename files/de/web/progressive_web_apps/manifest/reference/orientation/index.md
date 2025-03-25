---
title: orientation
slug: Web/Progressive_web_apps/Manifest/Reference/orientation
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `orientation`-Manifestmitglied wird verwendet, um die Standardausrichtung Ihrer Webanwendung festzulegen.
Es definiert, wie die App beim Starten und während der Nutzung in Bezug auf die Bildschirmorientierung des Geräts angezeigt werden soll, insbesondere auf Geräten, die mehrere Ausrichtungen unterstützen.

> [!NOTE]
> Die Ausrichtung der App kann zur Laufzeit durch verschiedene Mittel geändert werden, wie z.B. durch die Verwendung der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

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

  - : Ein String, der die Standardausrichtung für die Web-App festlegt.
    Wenn das `orientation`-Mitglied nicht angegeben ist oder ein ungültiger Wert angegeben wird, wird die Web-App typischerweise die natürliche Ausrichtung des Geräts sowie alle benutzer- oder systemseitigen Ausrichtungseinstellungen verwenden.

    Der `orientation`-Wert muss eines der folgenden Schlüsselwörter sein:

    - `any`

      - : Zeigt die Web-App in jeder vom Betriebssystem des Geräts oder von Benutzereinstellungen erlaubten Ausrichtung an.
        Es erlaubt der App, sich frei zu drehen, um die Ausrichtung des Geräts bei Drehung anzupassen.

    - `natural`

      - : Zeigt die Web-App in der Ausrichtung an, die für das Gerät als am natürlichsten angesehen wird, bestimmt durch den Browser, das Betriebssystem, Benutzereinstellungen oder den Bildschirm selbst. Dies entspricht der Art und Weise, wie das Gerät am häufigsten gehalten oder verwendet wird:

        - Auf Geräten, die typischerweise vertikal gehalten werden, wie Mobiltelefone, ist `natural` normalerweise `portrait-primary`.
        - Auf Geräten, die typischerweise horizontal verwendet werden, wie Computermonitore und Tablets, ist `natural` normalerweise `landscape-primary`.

        Wenn das Gerät gedreht wird, kann die App möglicherweise rotieren oder auch nicht, um die natürliche Ausrichtung des Geräts zu matchen; dieses Verhalten kann je nach spezifischem Gerät, Browser-Implementierung und Benutzereinstellungen variieren.

    - `portrait`

      - : Zeigt die Web-App mit einer größeren Höhe als Breite an.
        Es erlaubt der App, zwischen `portrait-primary` und `portrait-secondary` Ausrichtungen zu wechseln, wenn das Gerät gedreht wird.

    - `portrait-primary`

      - : Zeigt die Web-App im Hochformat an, typischerweise mit dem Gerät aufrecht gehalten.
        Dies ist normalerweise die Standardausrichtung der App auf Geräten, die von Natur aus Hochformat sind.
        Je nach Gerät und Browser-Implementierung wird die App typischerweise diese Ausrichtung beibehalten, selbst wenn das Gerät gedreht wird.

    - `portrait-secondary`

      - : Zeigt die Web-App im invertierten Hochformat an, was `portrait-primary` um 180 Grad gedreht ist.
        Je nach Gerät und Browser-Implementierung wird die App typischerweise diese Ausrichtung beibehalten, selbst wenn das Gerät gedreht wird.

    - `landscape`

      - : Zeigt die Web-App mit einer größeren Breite als Höhe an.
        Es erlaubt der App, zwischen `landscape-primary` und `landscape-secondary` Ausrichtungen zu wechseln, wenn das Gerät gedreht wird.

    - `landscape-primary`

      - : Zeigt die Web-App im Querformat an, typischerweise mit dem Gerät in seiner Standard-Position horizontal gehalten.
        Dies ist normalerweise die Standardausrichtung der App auf Geräten, die von Natur aus Querformat sind.
        Je nach Gerät und Browser-Implementierung wird die App typischerweise diese Ausrichtung beibehalten, selbst wenn das Gerät gedreht wird.

    - `landscape-secondary`

      - : Zeigt die Web-App im invertierten Querformat an, was `landscape-primary` um 180 Grad gedreht ist.
        Je nach Gerät und Browser-Implementierung wird die App typischerweise diese Ausrichtung beibehalten, selbst wenn das Gerät gedreht wird.

## Beschreibung

Um das `orientation`-Manifestmitglied zu verstehen, ist es wichtig, mit den folgenden, ausrichtungsbezogenen Konzepten vertraut zu sein:

- **Geräteausrichtung**: Definiert, wie das Gerät physisch gehalten oder positioniert wird.
- **Bildschirmausrichtung**: Definiert die physische Ausrichtung der Anzeige des Geräts.
- **App-Ausrichtung**: Definiert, wie der Inhalt der App relativ zur Bildschirmausrichtung angezeigt wird.

Wenn ein Gerät gedreht wird, ändert sich typischerweise die Bildschirmausrichtung. Beispielsweise wechselt der Bildschirm bei Drehung eines Mobiltelefons von vertikal nach horizontal normalerweise vom Hochformat zum Querformat. Ohne eine spezifische Ausrichtungseinstellung im Manifest passen die meisten Apps ihr Layout an, um diese neue Bildschirmausrichtung zu nutzen.

Das `orientation`-Mitglied des Manifests ermöglicht es Ihnen, zu kontrollieren, wie Ihre App auf diese Änderungen reagiert. Indem Sie eine bevorzugte Ausrichtung für Ihre App angeben, können Sie entscheiden, ob Ihre App auf Änderungen der Bildschirmausrichtung reagieren oder ein festes Layout beibehalten soll, unabhängig davon, wie das Gerät gehalten wird. Zum Beispiel, indem Sie `"orientation": "portrait-primary"` setzen, können Sie angeben, dass Sie bevorzugen, dass Ihre App immer im aufrechten Hochformat im Verhältnis zum Bildschirm angezeigt wird, selbst wenn das Gerät gedreht wird. Der Browser oder das Betriebssystem wird versuchen, diese Präferenz nach Möglichkeit zu berücksichtigen.

Das folgende Beispiel zeigt, wie das Layout einer Web-App aussehen könnte, wenn ein Mobiltelefon gedreht wird. Nehmen Sie für dieses Beispiel an, dass der `orientation`-Wert der App auf `any` gesetzt ist, wodurch die App zwischen allen `orientation`-Werten rotieren kann, wenn das Mobiltelefon gedreht wird. Nehmen Sie außerdem an, dass sowohl das Telefon als auch der Browser alle Ausrichtungen unterstützen. Die Sequenz zeigt eine Drehung des Telefons im Uhrzeigersinn, wobei jede Position von der Ausgangsposition wie folgt gedreht ist:

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

Die angegebene `orientation` wird auf alle Top-Level-{{Glossary("Browsing_context", "Browsing-Kontexte")}} der Web-App angewendet.

Wenn ein Browser den angegebenen `orientation`-Wert unterstützt, wird er diese als die Standard-Ausrichtung der App während ihrer gesamten Lebensdauer verwenden, es sei denn, sie wird zur Laufzeit überschrieben.
Das bedeutet, dass Browser bei Navigation auf diesen Standardwert der Ausrichtung zurückkehren, wann immer der Top-Level-Browsing-Kontext navigiert wird.

### Wahl einer bevorzugten Ausrichtung für Ihre Web-App

Durch das Festlegen einer bestimmten Ausrichtung können Sie sicherstellen, dass Ihre Web-App optimal für ihren Inhalt und ihre Benutzeroberfläche angezeigt wird.
Zum Beispiel ist eine Video-App oft besser für die Querformat-Ausrichtung geeignet, während eine Lese-App typischerweise besser im Hochformat funktioniert.

Das Nicht-Spezifizieren einer Ausrichtung kann auch eine bewusste Wahl sein, um Ihrer Web-App zu ermöglichen, sich flexibel an verschiedene Geräte und Benutzerpräferenzen anzupassen.

### Manifest `orientation` vs. Screen Orientation API Verhalten

Während das `orientation`-Manifestmitglied die Standardausrichtung der Web-App setzt, kann die Ausrichtung eines Top-Level-Browsing-Kontextes geändert werden, sobald die Web-App ausgeführt wird, unter Verwendung der [Screen Orientation API](/de/docs/Web/API/Screen_Orientation_API).

Die `orientation`-Werte sind im Web-App-Manifest und der Screen Orientation API ähnlich, jedoch unterscheiden sich ihr Verhalten und ihre Zwecke.

- Web-App-Manifest:

  - Gibt die bevorzugte Standard-Ausrichtung der Web-App mit dem `orientation`-Manifestmitglied an.
  - Setzt die anfängliche Ausrichtung, wenn die App gestartet wird.

- Screen Orientation API:

  - Verwendet Ausrichtungswerte, um den Bildschirm auf eine bestimmte Ausrichtung zu sperren.
  - Ermöglicht dynamische Änderungen der Ausrichtung während der Laufzeit (zum Beispiel, durch Sperren der Ausrichtung mit [`screen.orientation.lock()`](/de/docs/Web/API/ScreenOrientation/lock)).

  > [!NOTE]
  > Die [`lock()`](/de/docs/Web/API/ScreenOrientation/lock)-Methode der Screen Orientation API wird nicht von allen Browsern umfassend unterstützt.
  > Prüfen Sie die Kompatibilität, wenn Sie planen, sie zur dynamischen Änderung der Bildschirmausrichtung während der Laufzeit zu verwenden.

### Plattform- und Browser-Einschränkungen

Beim Hinzufügen der Ausrichtungspräferenz für Ihre App beachten Sie die folgenden Überlegungen und Einschränkungen:

- Browseranbieter und Gerätehersteller entscheiden, welche Ausrichtungen und [`display`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display)-Modi kompatibel sind.
- Bestimmte UI/UX-Angelegenheiten und Plattformkonventionen können einschränken, welche Bildschirmausrichtungen und Anzeigemodi zusammen verwendet werden können.
- Die Unterstützung spezifischer `orientation`-Werte kann je nach Gerät und Plattform variieren.
- Einige Geräte unterstützen möglicherweise nicht alle `orientation`-Werte wie `portrait-secondary` und `landscape-secondary`.
- Einige Browser erlauben möglicherweise nicht die Änderung der Standardausrichtung einer Web-App, während sie sich in bestimmten Anzeigemodi befindet (z.B. [`"display": "browser"`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/display#browser)).

## Beispiele

### Festlegen einer festen Ausrichtung für eine Web-App

Dieses Beispiel setzt die Ausrichtung der App auf `portrait-primary`. Bei Annahme der Unterstützung durch Browser und Gerät wird die App immer im aufrechten Hochformat angezeigt, auch wenn das Gerät gedreht wird.

```json
{
  "name": "My Web App",
  "orientation": "portrait-primary"
}
```

### Einstellen einer flexiblen Ausrichtung für eine Web-App

Betrachten Sie eine Fotoanzeige- und Bearbeitungs-App. In der Manifest-Datei der App, wie unten gezeigt, ist `orientation` auf `any` gesetzt. Dies ermöglicht es der App, in der aktuellen Ausrichtung des Geräts gestartet zu werden und sich sowohl an `portrait` als auch `landscape` Ausrichtungen anzupassen, während Benutzer ihre Geräte drehen. Diese `orientation`-Einstellung ermöglicht es Benutzern, Fotos in der jeweiligen aktuellen Anzeige oder ihrem aktuellen Nutzungskontext bequem in der Ausrichtung zu betrachten und zu bearbeiten.

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
- [Verwendung von Media Queries für Geräteausrichtungen](/de/docs/Web/CSS/CSS_media_queries/Using_media_queries)
- [Lernen: Responsive Design](/de/docs/Learn_web_development/Core/CSS_layout/Responsive_Design)
