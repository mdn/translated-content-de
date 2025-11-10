---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 6ef7bc04d63cf8b512bdbea149a6cb875cc063e3
---

Das `start_url`-Manifestmitglied wird verwendet, um die URL anzugeben, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, zum Beispiel, wenn er das Symbol der Anwendung auf dem Startbildschirm seines Geräts oder in einer Anwendungsliste antippt.

> [!NOTE]
> Die `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) im Umgang mit der `start_url` und müssen nicht immer den angegebenen Wert verwenden.

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
    Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder nicht {{Glossary("origin", "same-origin")}} wie die Seite, die auf das Manifest verweist), wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > Bei einigen Browsern muss die `start_url` angegeben werden, damit eine [PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) (siehe den Abschnitt zur Kompatibilität unten).
    > Sie können `"start_url": "./"` festlegen, um das Standardverhalten in allen Browsern zu verwenden.

    > [!NOTE]
    > Falls [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) nicht im Manifest angegeben ist, wird dieser aus der `start_url` (oder der effektiven `start_url`, wenn der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Die `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite aus, die er gerade betrachtet. Während der Installation ruft der Browser die Manifestdatei ab, die von dieser Seite aus verlinkt ist. Während die Manifestdatei von einem beliebigen Ursprung bereitgestellt werden kann, ist der Installationsprozess an die Seite gebunden, auf der er beginnt. Betrachten Sie folgendes Szenario:

- Die Installationsseite ist `https://myapp.example.com/index.html`.
- Die Manifestdatei befindet sich unter `https://assets.cdn.com/manifest.json`.
- Die `start_url` ist `https://myapp.example.com/home`.

Die in diesem Beispiel angegebene `start_url` wird verwendet, da sie den gleichen Ursprung wie die Seite hat, von der die App installiert wird. Wäre die angegebene `start_url` auf einem anderen Ursprung (zum Beispiel `https://differentapp.example.com/home`), würden Browser auf die URL der Installationsseite als Ausgangspunkt zurückgreifen. Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs starten.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden. Sie können den angegebenen Wert ignorieren oder Benutzern die Möglichkeit geben, ihn nicht zu verwenden. Sie können Benutzern zudem erlauben, die URL anzupassen, wenn sie ein Lesezeichen für die Web-App erstellen oder zu einem späteren Zeitpunkt. Dies sollten Sie bei der Gestaltung Ihrer App berücksichtigen, um Variationen in der `start_url` zu ermöglichen.

### Beste Praktiken

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App navigieren, wie zum Beispiel zu einem Dashboard. Berücksichtigen Sie Funktionen, auf die Benutzer sofort nach dem Start der App zugreifen möchten. Wenn die Hauptseite Ihrer App im Root Ihrer Website ist, können Sie die `start_url` auf `/` setzen. Sie können auch einen Deep Link angeben (z.B. `https://myapp.com/product/whatsnew`), um Benutzer zu spezifischem Inhalt innerhalb Ihrer App zu leiten. Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss die `start_url` dasselbe Origin wie die Manifest-URL haben. Wenn eine `start_url` mit einem anderen Ursprung angegeben wird, fallen Browser auf die Seite zurück, die auf das Manifest verweist, als Standardstartseite.

## Datenschutzüberlegungen

- **Fingerprinting**:

  Das Kodieren von Strings in der `start_url`, um Benutzer eindeutig zu identifizieren (z.B. serverseitig zugewiesene Kennungen wie `?user=123`, `/user/123/` oder `https://user123.example.com`), erzeugt einen persistierenden Fingerabdruck. Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzsensiblen Informationen auch nach dem Löschen der Website-Daten bestehen bleiben können. Es ist eine schlechte Praxis, Informationen in die `start_url` aufzunehmen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutz gegen diese Art des Fingerprintings bieten. Zum Beispiel, wenn Benutzer Daten von einem Ursprung löschen, können Browser sie auffordern, Apps zu deinstallieren, die im Gültigkeitsbereich dieses Ursprungs liegen. Dies entfernt jeden potenziellen Fingerabdruck aus der `start_url` der App.

- **Launch-Tracking**:

  Das Hinzufügen von Parametern zu einer `start_url`, um anzuzeigen, dass die App von außerhalb des Browsers gestartet wurde (z.B. `"start_url": "index.html?launcher=homescreen"`), kann für Analysen und Anpassungen nützlich sein. Diese Informationen könnten jedoch als Teil des digitalen Fingerabdrucks eines Benutzers verwendet werden. Berücksichtigen Sie die potenziellen Datenschutzimplikationen, wenn Sie solches Tracking implementieren.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifestdatei Ihrer Wander-App befindet sich unter `https://hiking-pro.com/resources/manifest.json`, und `https://hiking-pro.com/index.html` verlinkt auf die Manifestdatei. Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten. Sie können diese Start-URL in Ihrer Manifestdatei wie folgt angeben:

```json
{ "start_url": "https://hiking-pro.com/trail-hub.html" }
```

Dieser `start_url`-Wert ist gültig, da er den gleichen Ursprung wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) hat.

Der folgende `start_url` ist ungültig, da er nicht denselben Ursprung wie die Manifest-URL hat:

```json example-bad
{ "start_url": "https://other-domain.com/trail-hub.html" }
```

In diesem Fall wird `https://hiking-pro.com/index.html` als Standardstartseite verwendet, wenn Benutzer die App starten.

### Angabe einer relativen Start-URL

Für Ihre Wander-App im vorherigen Szenario können Sie denselben Startpunkt mit einer relativen URL angeben, wie unten gezeigt. Diese relative URL wird zu `https://hiking-pro.com/trail-hub.html` unter Verwendung der URL der Manifestdatei (`https://hiking-pro.com/resources/manifest.json`) als Basis aufgelöst.

```json
{ "start_url": "../trail-hub.html" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Application_context", "Anwendungskontext")}}
- {{Glossary("Same-origin_policy", "Same-origin-Policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) um Ihre Web-App installierbar zu machen
- [Sicherheit im Web](/de/docs/Web/Security)
