---
title: start_url
slug: Web/Manifest/start_url
l10n:
  sourceCommit: 1e660f71a4741c5fdf36bb7ac8dc7acfbc9cfb49
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Das `start_url` Manifestmitglied wird verwendet, um die URL anzugeben, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, beispielsweise durch Antippen des Anwendungssymbols auf dem Startbildschirm ihres Geräts oder in einer Anwendungsliste.

> [!NOTE]
> Die `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) bei der Handhabung der `start_url` und verwenden möglicherweise nicht immer den angegebenen Wert.

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

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder nicht {{Glossary("origin", "gleicher Ursprung")}} wie die Seite, die auf das Manifest verweist), wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > Wenn im Manifest [`scope`](/de/docs/Web/Manifest/scope) nicht angegeben ist, wird dieser aus der `start_url` (oder der effektiven `start_url`, wenn der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Die `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite, die er derzeit betrachtet.
Während der Installation ruft der Browser die mit dieser Seite verknüpfte Manifestdatei ab.
Obwohl die Manifestdatei von einer beliebigen Ursprungsquelle bereitgestellt werden kann, ist der Installationsprozess an die Seite gebunden, auf der er beginnt.
Betrachten Sie folgendes Szenario:

- Die Installationsseite ist `https://myapp.example.com/index.html`.
- Die Manifestdatei ist unter `https://assets.cdn.com/manifest.json` gehostet.
- Die `start_url` ist `https://myapp.example.com/home`.

Die angegebene `start_url` in diesem Beispiel wird verwendet, weil sie denselben Ursprung hat wie die Seite, von der die App installiert wird.
Wenn die angegebene `start_url` sich in einem anderen Ursprung befände (zum Beispiel `https://differentapp.example.com/home`), würden Browser auf die URL der Installationsseite als Ausgangspunkt zurückfallen.
Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs starten.

Beachten Sie jedoch, dass Browser den angegebenen URL nicht verwenden müssen.
Sie können den angegebenen Wert ignorieren oder den Nutzern die Möglichkeit geben, ihn nicht zu verwenden.
Sie könnten den Nutzern auch erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern.
Dies sollten Sie bei der Gestaltung Ihrer App berücksichtigen, um Variationen in der `start_url` zu ermöglichen.

### Best Practices

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App führen, wie z.B. einem Dashboard.
Berücksichtigen Sie Funktionen, auf die Benutzer sofort nach dem Start der App zugreifen möchten.
Wenn sich die Hauptseite Ihrer App im Stammverzeichnis Ihrer Website befindet, können Sie die `start_url` auf `/` setzen.
Sie können auch einen Deep-Link (z.B. `https://myapp.com/product/whatsnew`) angeben, um Benutzer zu bestimmten Inhalten innerhalb Ihrer App zu leiten.
Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss die `start_url` denselben Ursprung haben wie die Manifest-URL.
Wenn eine `start_url` mit einem anderen Ursprung angegeben wird, fallen Browser darauf zurück, die Seite zu verwenden, die auf das Manifest verlinkt, als die Standard-Startseite.

## Datenschutzüberlegungen

- **Fingerprinting**:

  Wenn Sie Strings in die `start_url` einbetten, um Benutzer eindeutig zu identifizieren (z.B. serverseitig zugewiesene Identifikatoren wie `?user=123`, `/user/123/`, oder `https://user123.foo.bar`), wird ein persistenter Fingerabdruck erstellt.
  Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzsensiblen Informationen auch nach dem Löschen von Website-Daten bestehen bleiben können.
  Es ist schlechte Praxis, Informationen in die `start_url` aufzunehmen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutzmaßnahmen gegen diese Art von Fingerprinting bieten.
  Zum Beispiel, wenn Benutzer Daten von einem Ursprung löschen, können Browser sie auffordern, Apps zu deinstallieren, die sich innerhalb des Ursprungsbereichs befinden.
  Dies entfernt potenzielle Fingerabdrücke aus der `start_url` der App.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einer `start_url`, um anzuzeigen, dass die App von außerhalb des Browsers gestartet wurde (z.B. `"start_url": "index.html?launcher=homescreen"`), kann für Analysen und Anpassungen nützlich sein.
  Diese Informationen könnten jedoch als Teil eines digitalen Fingerabdrucks eines Benutzers verwendet werden.
  Bedenken Sie die potenziellen Datenschutzimplikationen, wenn Sie solch eine Verfolgung implementieren.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifestdatei Ihrer Wander-Web-App befindet sich unter `https://hiking-pro.com/resources/manifest.json`, und `https://hiking-pro.com/index.html` verlinkt zur Manifestdatei.
Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten.
Diese Start-URL können Sie in Ihrer Manifestdatei wie folgt angeben:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url` Wert ist gültig, weil er denselben Ursprung wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) hat.

Folgende `start_url` ist ungültig, da sie nicht denselben Ursprung wie die Manifest-URL hat:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In diesem Fall wird `https://hiking-pro.com/index.html` als Standard-Startseite verwendet, wenn Benutzer die App starten.

### Angabe einer relativen Start-URL

Für Ihre Wander-App im vorherigen Szenario können Sie denselben Startpunkt mit einer relativen URL angeben, wie unten gezeigt.
Diese relative URL wird zu `https://hiking-pro.com/trail-hub.html` aufgelöst, indem die URL der Manifestdatei (`https://hiking-pro.com/resources/manifest.json`) als Basis verwendet wird.

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
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) zum Installieren Ihrer Web-App
- [Sicherheit im Web](/de/docs/Web/Security)
