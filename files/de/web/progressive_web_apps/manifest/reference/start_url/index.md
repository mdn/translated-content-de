---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `start_url`-Manifest-Element wird verwendet, um die URL anzugeben, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, z. B. beim Antippen des Anwendungssymbols auf dem Startbildschirm seines Geräts oder in einer Anwendungsübersicht.

> [!NOTE]
> Die `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) im Umgang mit der `start_url` und müssen möglicherweise nicht immer den angegebenen Wert verwenden.

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

  - : Ein Zeichenfolge, die die Start-URL einer Web-App darstellt.
    Die URL kann absolut oder relativ sein.
    Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d.h. keine Zeichenfolge, keine gültige URL oder nicht {{Glossary("origin", "same-origin")}} wie die Seite, die auf das Manifest verweist), wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > In einigen Browsern _muss_ die `start_url` angegeben werden, damit eine [PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) (siehe den Kompatibilitätsabschnitt unten).
    > Sie können `"start_url": "./"` setzen, um das Standardverhalten in allen Browsern zu verwenden.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) im Manifest nicht angegeben ist, wird es von der `start_url` (oder der effektiven `start_url`, wenn der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Die `start_url` ermöglicht Ihnen, einen geeigneten allgemeinen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite aus, die er derzeit betrachtet.
Während der Installation ruft der Browser die Manifestdatei ab, die von dieser Seite verlinkt ist.
Obwohl die Manifestdatei von einem beliebigen Ursprung bereitgestellt werden kann, ist der Installationsprozess mit der Seite verbunden, auf der er beginnt.
Betrachten Sie ein Szenario, bei dem:

- Die Installationsseite `https://myapp.example.com/index.html` ist.
- Die Manifestdatei auf `https://assets.cdn.com/manifest.json` gehostet wird.
- Die `start_url` `https://myapp.example.com/home` ist.

Die angegebene `start_url` in diesem Beispiel wird verwendet, da sie same-origin mit der Seite ist, von der die App installiert wird.
Wenn die angegebene `start_url` auf einem anderen Ursprung wäre (zum Beispiel `https://differentapp.example.com/home`), würden Browser darauf zurückfallen, die Installationsseiten-URL als Ausgangspunkt zu verwenden.
Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs starten.

Es ist jedoch zu beachten, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie können den angegebenen Wert ignorieren oder den Benutzern die Möglichkeit geben, ihn nicht zu verwenden.
Sie können den Benutzern auch erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern.
Beachten Sie dies bei der Gestaltung Ihrer App, um Variationen in der `start_url` zu ermöglichen.

### Gute Praktiken

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App navigieren lassen, wie zum Beispiel einem Dashboard.
Berücksichtigen Sie Funktionen, auf die Benutzer unmittelbar nach dem Starten der App zugreifen möchten.
Wenn die Hauptseite Ihrer App im Stammverzeichnis Ihrer Website liegt, können Sie die `start_url` auf `/` setzen.
Sie können auch einen Deep-Link angeben (z. B. `https://myapp.com/product/whatsnew`), um Benutzer zu bestimmtem Inhalt innerhalb Ihrer App zu leiten.
Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss die `start_url` same-origin mit der Manifest-URL sein.
Wenn eine nicht same-origin `start_url` angegeben wird, werden Browser darauf zurückfallen, die Seite, die auf das Manifest verweist, als Standardstartseite zu verwenden.

## Datenschutzüberlegungen

- **Fingerabdruck**:

  Das Kodieren von Zeichenfolgen in `start_url`, um Benutzer eindeutig zu identifizieren (z. B. serverseitig zugewiesene Kennungen, wie `?user=123`, `/user/123/`, oder `https://user123.foo.bar`), erzeugt einen dauerhaften Fingerabdruck.
  Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzrelevanten Informationen bestehen bleiben, selbst nachdem sie die Webseiten-Daten gelöscht haben.
  Es ist eine schlechte Praxis, irgendwelche Informationen in `start_url` aufzunehmen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutz gegen diese Art von Fingerabdruck bieten.
  Wenn Benutzer beispielsweise Daten von einem Ursprung löschen, können Browser sie auffordern, Apps zu deinstallieren, die innerhalb des Bereichs dieses Ursprungs liegen.
  Dadurch wird jeder potenzielle Fingerabdruck aus der `start_url` der App entfernt.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einer `start_url`, um anzuzeigen, dass die App außerhalb des Browsers gestartet wurde (z. B. `"start_url": "index.html?launcher=homescreen"`) kann für Analysen und Anpassungen nützlich sein.
  Diese Informationen könnten jedoch als Teil eines digitalen Fingerabdrucks eines Benutzers verwendet werden.
  Berücksichtigen Sie die potenziellen Datenschutzimplikationen, wenn Sie solches Tracking implementieren.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifestdatei Ihrer Wander-App befindet sich unter `https://hiking-pro.com/resources/manifest.json`, und `https://hiking-pro.com/index.html` verweist auf die Manifestdatei.
Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifestdatei folgendermaßen angeben:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url`-Wert ist gültig, da er same-origin mit der Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) ist.

Der folgende `start_url` ist ungültig, da er nicht same-origin mit der Manifest-URL ist:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In diesem Fall wird `https://hiking-pro.com/index.html` als Standardstartseite verwendet, wenn Benutzer die App starten.

### Angabe einer relativen Start-URL

Für Ihre Wander-App im vorherigen Szenario können Sie denselben Startpunkt mit einer relativen URL angeben, wie unten gezeigt.
Diese relative URL wird zu `https://hiking-pro.com/trail-hub.html` aufgelöst, wobei die URL der Manifestdatei (`https://hiking-pro.com/resources/manifest.json`) als Basis verwendet wird.

```json
"start_url": "../trail-hub.html"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Application_context", "Anwendungskontext")}}
- {{Glossary("Same-origin_policy", "Same-origin policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) zum Installieren Ihrer Web-App
- [Sicherheit im Web](/de/docs/Web/Security)
