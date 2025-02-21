---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 05187b0fecf39b9176d4a101623589309cf44dd0
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `start_url` Manifest-Element wird verwendet, um die URL zu spezifizieren, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, zum Beispiel durch das Antippen des Anwendungssymbols auf dem Startbildschirm ihres Geräts oder in einer Anwendungsliste.

> [!NOTE]
> Das `start_url` ist ein Hinweis für Browser. [Browsers haben Flexibilität](#beschreibung) dabei, wie sie mit dem `start_url` umgehen und verwenden möglicherweise nicht immer den angegebenen Wert.

## Syntax

```json-nolint
/* Absolute URLs */
"start_url": "https://example.com/myapp"
"start_url": "https://myapp.com/home"

/* Relative URLs */
"start_url": "/"
"start_url": "../index.html"
```

### Werte

- `start_url`

  - : Ein String, der die Start-URL einer Web-App darstellt.
    Die URL kann absolut oder relativ sein.
    Wenn der Wert relativ ist, wird er relativ zur URL der Manifest-Datei aufgelöst.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d.h. keine Zeichenkette, keine gültige URL oder nicht {{Glossary("origin", "same-origin")}} wie die Seite, die auf das Manifest verweist), wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) im Manifest nicht spezifiziert ist, wird es von `start_url` (oder dem effektiven `start_url`, wenn der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Das `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite, die er gerade betrachtet.
Während der Installation ruft der Browser die Manifest-Datei ab, die von dieser Seite aus verlinkt ist.
Obwohl die Manifest-Datei von jedem Ursprung bedient werden kann, ist der Installationsprozess an die Seite gebunden, auf der er beginnt.
Betrachten Sie folgendes Szenario:

- Die Installationsseite ist `https://myapp.example.com/index.html`.
- Die Manifest-Datei ist bei `https://assets.cdn.com/manifest.json` gehostet.
- Das `start_url` ist `https://myapp.example.com/home`.

Das angegebene `start_url` in diesem Beispiel wird verwendet, weil es same-origin mit der Seite ist, von der die App installiert wird.
Wenn das angegebene `start_url` auf einem anderen Ursprung wäre (zum Beispiel `https://differentapp.example.com/home`), würden Browser darauf zurückfallen, die URL der Installationsseite als Ausgangspunkt zu verwenden.
Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs beginnen.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie können den angegebenen Wert ignorieren oder den Benutzern die Wahl lassen, ihn nicht zu verwenden.
Sie können Benutzern auch erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern.
Beachten Sie dies bei der Gestaltung Ihrer App, um Variationen im `start_url` zu ermöglichen.

### Best Practices

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App führen, wie z.B. einem Dashboard.
Berücksichtigen Sie Funktionen, auf die Benutzer unmittelbar nach dem Starten der App zugreifen möchten.
Wenn sich die Hauptseite Ihrer App im Stammverzeichnis Ihrer Website befindet, können Sie das `start_url` auf `/` setzen.
Sie können auch einen tiefen Link angeben (z. B. `https://myapp.com/product/whatsnew`), um Benutzer zu spezifischen Inhalten innerhalb Ihrer App zu führen.
Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss das `start_url` same-origin mit der Manifest-URL sein.
Wenn ein nicht same-origin `start_url` angegeben ist, werden Browser darauf zurückfallen, die Seite zu verwenden, die auf das Manifest verweist, als die standardmäßige Startseite.

## Datenschutzüberlegungen

- **Fingerprinting**:

  Das Kodieren von Zeichenfolgen in `start_url`, um Benutzer eindeutig zu identifizieren (z. B. serverseitig zugewiesene Identifikatoren, wie `?user=123`, `/user/123/` oder `https://user123.foo.bar`), erstellt einen dauerhaften Fingerabdruck.
  Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzsensiblen Informationen auch nach dem Löschen von Site-Daten bestehen bleiben können.
  Es ist schlechte Praxis, jegliche Informationen in `start_url` einzuschließen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutzmaßnahmen gegen diese Art von Fingerprinting bieten.
  Beispielsweise können Browser, wenn Benutzer Daten von einem Ursprung löschen, sie dazu auffordern, Apps zu deinstallieren, die innerhalb des Geltungsbereichs dieses Ursprungs liegen.
  Dies entfernt jeden potenziellen Fingerabdruck aus dem `start_url` der App.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einem `start_url`, um anzugeben, dass die App von außerhalb des Browsers gestartet wurde (z. B. `"start_url": "index.html?launcher=homescreen"`) kann für Analysen und Anpassungen nützlich sein.
  Diese Informationen könnten jedoch als Teil eines digitalen Fingerabdrucks eines Benutzers verwendet werden.
  Berücksichtigen Sie die potenziellen Datenschutzimplikationen, wenn Sie eine solche Verfolgung implementieren.

## Beispiele

### Angeben einer absoluten Start-URL

Nehmen wir an, die Manifest-Datei Ihrer Wander-App befindet sich unter `https://hiking-pro.com/resources/manifest.json` und `https://hiking-pro.com/index.html` verweist auf die Manifest-Datei.
Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifest-Datei wie folgt angeben:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url`-Wert ist gültig, da er same-origin mit der Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) ist.

Der folgende `start_url` ist ungültig, da er nicht same-origin mit der Manifest-URL ist:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

Im obigen Fall wird `https://hiking-pro.com/index.html` als Standardstartseite verwendet, wenn Benutzer die App starten.

### Angeben einer relativen Start-URL

Für Ihre Wander-App im vorherigen Szenario können Sie denselben Startpunkt mit einer relativen URL angeben, wie unten gezeigt.
Diese relative URL wird zu `https://hiking-pro.com/trail-hub.html` aufgelöst, wobei die URL der Manifest-Datei (`https://hiking-pro.com/resources/manifest.json`) als Basis verwendet wird.

```json
"start_url": "../trail-hub.html"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Application_context", "Application context")}}
- {{Glossary("Same-origin_policy", "Same-origin policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) zur Installierbarkeit Ihrer Web-App
- [Sicherheit im Web](/de/docs/Web/Security)
