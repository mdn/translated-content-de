---
title: start_url
slug: Web/Manifest/start_url
l10n:
  sourceCommit: bea339d321513fc6d66d95c8f0305b9387fa57bb
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `start_url`-Manifest-Mitglied wird verwendet, um die URL zu spezifizieren, die geöffnet werden soll, wenn ein Nutzer Ihre Webanwendung startet, z. B. durch Tippen auf das App-Symbol auf dem Startbildschirm des Geräts oder in einer Anwendungsliste.

> [!NOTE]
> Das `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) darin, wie sie `start_url` behandeln und müssen den angegebenen Wert nicht immer verwenden.

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

    Das `start_url` muss innerhalb des [Scopes](/de/docs/Web/Manifest/scope) der Web-App sein und muss gleichen Ursprungs mit der Manifest-URL sein.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d. h. kein String, keine gültige URL oder nicht gleichen Ursprungs mit der Manifest-URL), wird die URL der Seite verwendet, die auf das Manifest verweist.

## Beschreibung

Das `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Nutzer vorzuschlagen.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie können den angegebenen Wert ignorieren oder den Nutzern die Möglichkeit geben, ihn nicht zu verwenden.
Browser können auch den Nutzern erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern.
Berücksichtigen Sie dies beim Entwerfen Ihrer App, um Variationen in `start_url` zuzulassen.

### Beste Praktiken

Diese URL sollte Nutzer zu einer wichtigen Seite Ihrer App navigieren, wie z. B. einem Dashboard.
Überlegen Sie, welche Funktionen Nutzer unmittelbar nach dem Starten der App erreichen möchten.
Wenn sich die Hauptseite Ihrer App in der Root Ihres Standorts befindet, können Sie `start_url` auf `/` setzen.
Sie können auch einen Deep-Link angeben (z. B. `https://myapp.com/product/whatsnew`), um Nutzer direkt zu spezifischen Inhalten innerhalb Ihrer App zu führen.
Vermeiden Sie die Angabe einer generischen Startseite.

Aus Sicherheitsgründen muss das `start_url` gleichen Ursprungs mit der Manifest-URL sein.
Wenn ein `start_url` angegeben wird, das nicht gleichen Ursprungs ist, fällt der Browser darauf zurück, die Seite zu verwenden, die auf das Manifest verweist, als Standard-Startseite.

## Datenschutzaspekte

- **Fingerprinting**:

  Das Kodieren von Strings in `start_url`, um Nutzer eindeutig zu identifizieren (z. B. serverseitig zugewiesene Kennungen, wie `?user=123`, `/user/123/`, oder `https://user123.foo.bar`), erzeugt einen dauerhaften Fingerabdruck.
  Nutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzsensiblen Informationen auch nach dem Löschen von Standortdaten bestehen bleiben können.
  Es ist eine schlechte Praxis, Informationen in `start_url` aufzunehmen, die Nutzer eindeutig identifizieren könnten.

  Browser können Schutzmaßnahmen gegen diese Art des Fingerprintings bieten.
  Beispielsweise können Browser, wenn Nutzer Daten von einem Ursprung löschen, dazu auffordern, Apps zu deinstallieren, die innerhalb des Scopes dieses Ursprungs liegen.
  Dies entfernt potenzielle Fingerabdrücke aus dem `start_url` der App.

- **Start-Tracking**:

  Das Hinzufügen von Parametern zu einem `start_url`, um anzugeben, dass die App von außerhalb des Browsers gestartet wurde (z. B. `"start_url": "index.html?launcher=homescreen"`), kann nützlich für Analysen und Anpassungen sein.
  Diese Informationen könnten jedoch als Teil eines digitalen Fingerabdrucks eines Nutzers verwendet werden.
  Berücksichtigen Sie die potenziellen Datenschutzimplikationen bei der Implementierung eines solchen Trackings.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifestdatei Ihrer Outdoor-App befindet sich unter `https://hiking-pro.com/resources/manifest.json`, und `https://hiking-pro.com/index.html` verweist auf die Manifestdatei.
Sie möchten, dass Nutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifestdatei wie folgt angeben:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url`-Wert ist gültig, da er gleichen Ursprungs mit der Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) ist.

Der folgende `start_url` ist ungültig, da er nicht gleichen Ursprungs mit der Manifest-URL ist:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In diesem Fall wird `https://hiking-pro.com/index.html` als Standard-Startseite verwendet, wenn Nutzer die App starten.

### Angabe einer relativen Start-URL

Für Ihre Outdoor-App im vorherigen Szenario können Sie denselben Startpunkt mit einer relativen URL angeben, wie unten gezeigt.
Diese relative URL wird zu `https://hiking-pro.com/trail-hub.html` aufgelöst, wobei die URL der Manifestdatei (`https://hiking-pro.com/resources/manifest.json`) als Basis verwendet wird.

```json
"start_url": "../trail-hub.html"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Application_context", "Application Context")}}
- {{Glossary("Same-origin_policy", "Same-origin policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [Sicherheit im Web](/de/docs/Web/Security)
