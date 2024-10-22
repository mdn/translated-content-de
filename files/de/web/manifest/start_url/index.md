---
title: start_url
slug: Web/Manifest/start_url
l10n:
  sourceCommit: 5d4cc96f432d408b898dbdc8f39f1cab36d3af59
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `start_url` Manifest-Mitglied wird verwendet, um die URL anzugeben, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, beispielsweise beim Tippen auf das Anwendungssymbol auf dem Startbildschirm ihres Geräts oder in einer Anwendungsübersicht.

> [!NOTE]
> Die `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) im Umgang mit `start_url` und verwenden möglicherweise nicht immer den angegebenen Wert.

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
    Wenn der Wert relativ ist, wird er gegen die Manifest-URL aufgelöst.

    Die `start_url` muss innerhalb des [scopes](/de/docs/Web/Manifest/scope) der Web-App sein und denselben Ursprung wie die Manifest-URL haben.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig (d.h. kein String, keine gültige URL oder nicht gleich-origin mit der Manifest-URL) ist, wird die URL der Seite verwendet, die auf das Manifest verweist.

## Beschreibung

Die `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie könnten den angegebenen Wert ignorieren oder den Benutzern die Wahl geben, ihn nicht zu verwenden.
Sie können Benutzern auch erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern.
Berücksichtigen Sie dies bei der Gestaltung Ihrer App, um Variationen in der `start_url` zu ermöglichen.

### Beste Praktiken

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App navigieren, z. B. einem Dashboard.
Überlegen Sie sich, welche Funktionen Benutzer unmittelbar nach dem Starten der App aufrufen möchten.
Wenn sich die Hauptseite Ihrer App im Root Ihrer Seite befindet, können Sie die `start_url` auf `/` setzen.
Sie können auch einen Deep Link (z.B. `https://myapp.com/product/whatsnew`) angeben, um Benutzer zu bestimmten Inhalten innerhalb Ihrer App zu leiten.
Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss die `start_url` denselben Ursprung wie die Manifest-URL haben.
Wenn eine `start_url` mit einem anderen Ursprung angegeben wird, werden Browser auf die Seite zurückgreifen, die auf das Manifest als Standard-Startseite verweist.

## Datenschutzüberlegungen

- **Fingerprinting**:

  Das Kodieren von Strings in `start_url`, um Benutzer eindeutig zu identifizieren (z.B. serverzugewiesene Identifikatoren wie `?user=123`, `/user/123/` oder `https://user123.foo.bar`), erzeugt einen persistenten Fingerabdruck.
  Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzsensiblen Informationen bestehen bleiben können, selbst nachdem sie Websitedaten gelöscht haben.
  Es ist eine schlechte Praxis, Informationen in `start_url` aufzunehmen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutzmaßnahmen gegen diese Art des Fingerprintings bieten.
  Beispielsweise könnten Browser Benutzer auffordern, Apps innerhalb desselben Ursprungs zu deinstallieren, wenn sie Daten aus einem Ursprung löschen.
  Dadurch wird jeder potentielle Fingerabdruck aus der `start_url` der App entfernt.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einer `start_url`, um anzuzeigen, dass die App von außerhalb des Browsers gestartet wurde (z.B. `"start_url": "index.html?launcher=homescreen"`), kann nützlich für Analysen und Anpassungen sein.
  Diese Informationen könnten jedoch als Teil eines digitalen Fingerabdrucks eines Benutzers verwendet werden.
  Berücksichtigen Sie die möglichen Datenschutzimplikationen bei der Implementierung solcher Verfolgung.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifestdatei Ihrer Wander-Web-App befindet sich unter `https://hikingpro.com/resources/manifest.json` und `https://hikingpro.com/index.html` verweist auf die Manifestdatei.
Sie möchten, dass Benutzer auf der Seite `trailhub.html` landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifestdatei wie folgt angeben:

```json
"start_url": "https://hikingpro.com/trailhub.html"
```

Dieser `start_url`-Wert ist gültig, weil er denselben Ursprung wie die Manifest-URL (`https://hikingpro.com/resources/manifest.json`) hat.

Die folgende `start_url` ist ungültig, weil sie nicht denselben Ursprung wie die Manifest-URL hat:

```json example-bad
"start_url": "https://other-domain.com/trailhub.html"
```

In diesem Fall wird `https://hikingpro.com/index.html` als Standard-Startseite verwendet, wenn Benutzer die App starten.

### Angabe einer relativen Start-URL

Für Ihre Wander-App im vorherigen Szenario können Sie denselben Ausgangspunkt mit einer relativen URL angeben, wie unten gezeigt.
Diese relative URL wird auf `https://hikingpro.com/trailhub.html` unter Verwendung der URL der Manifestdatei (`https://hikingpro.com/resources/manifest.json`) als Basis aufgelöst.

```json
"start_url": "../trailhub.html"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Application_context", "Applikationskontext")}}
- {{Glossary("Same-origin_policy", "Same-origin-Policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) zur Installation Ihrer Web-App
- [Sicherheit im Web](/de/docs/Web/Security)
