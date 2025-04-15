---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 181082d457dc196c519405a7f6cee83fa117f128
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `start_url`-Manifestmitglied wird verwendet, um die URL festzulegen, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, z. B. durch Tippen auf das Anwendungs-Icon auf dem Startbildschirm des Geräts oder in einer Anwendungsübersicht.

> [!NOTE]
> Die `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) bei der Handhabung von `start_url` und müssen den angegebenen Wert möglicherweise nicht immer verwenden.

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

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder nicht {{Glossary("origin", "same-origin")}} mit der Seite, die auf das Manifest verlinkt), wird die URL der Seite verwendet, die auf das Manifest verlinkt.

    > [!NOTE]
    > In einigen Browsern _muss_ das `start_url` angegeben werden, damit eine [PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) (siehe den Abschnitt zur Kompatibilität unten).
    > Sie können `"start_url": "./"` festlegen, um das Standardverhalten in allen Browsern zu verwenden.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) im Manifest nicht angegeben ist, wird er aus dem `start_url` (oder dem effektiven `start_url`, falls der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Die `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite aus, die der Benutzer gerade betrachtet.
Während der Installation lädt der Browser die Manifest-Datei von dieser Seite herunter.
Obwohl die Manifest-Datei von jedem Ursprung aus bereitgestellt werden kann, ist der Installationsprozess an die Seite gebunden, bei der er beginnt.
Betrachten Sie ein Szenario, bei dem:

- Die Installationsseite `https://myapp.example.com/index.html` ist.
- Die Manifest-Datei unter `https://assets.cdn.com/manifest.json` gehostet wird.
- Die `start_url` `https://myapp.example.com/home` ist.

Die in diesem Beispiel angegebene `start_url` wird verwendet, da sie den gleichen Ursprung wie die Seite hat, von der aus die App installiert wird.
Wenn die angegebene `start_url` in einem anderen Ursprung wäre (zum Beispiel `https://differentapp.example.com/home`), würden Browser auf die URL der Installationsseite als Ausgangspunkt zurückgreifen.
Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs starten.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie können den angegebenen Wert ignorieren oder den Benutzern die Möglichkeit geben, ihn nicht zu verwenden.
Sie können auch Benutzern erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern.
Berücksichtigen Sie dies bei der Gestaltung Ihrer App, um Abweichungen im `start_url` zuzulassen.

### Best Practices

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App navigieren, wie zum Beispiel einem Dashboard.
Denken Sie an Funktionen, die Benutzer unmittelbar nach dem Starten der App aufrufen möchten.
Wenn sich die Hauptseite Ihrer App im Stammverzeichnis Ihrer Website befindet, können Sie das `start_url` auf `/` setzen.
Sie können auch einen Deep Link angeben (z. B. `https://myapp.com/product/whatsnew`), um Benutzer zu spezifischen Inhalten innerhalb Ihrer App zu leiten.
Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss das `start_url` denselben Ursprung wie die Manifest-URL haben.
Wenn ein nicht gleicher Ursprung für `start_url` angegeben wird, greifen Browser auf die Verwendung der Seite, die auf das Manifest verweist, als Standard-Startseite zurück.

## Datenschutzüberlegungen

- **Fingerabdruckserkennung**:

  Das Einbetten von String in die `start_url`, um Benutzer eindeutig zu identifizieren (z. B. server-zugewiesene Identifikatoren wie `?user=123`, `/user/123/` oder `https://user123.foo.bar`), erzeugt einen dauerhaften Fingerabdruck.
  Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzrelevanten Informationen auch nach dem Löschen von Websitedaten bestehen bleiben können.
  Es ist schlechte Praxis, in der `start_url` Informationen zu enthalten, die Benutzer eindeutig identifizieren können.

  Browser können Schutz gegen diese Art von Fingerabdruckserkennung bieten.
  Beispielsweise können Browser Benutzer auffordern, Apps zu deinstallieren, die sich im Scope dieses Ursprungs befinden, wenn Benutzer Daten eines Ursprungs löschen.
  Dies entfernt möglichen Fingerabdruck von der `start_url` der App.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einer `start_url`, um zu kennzeichnen, dass die App außerhalb des Browsers gestartet wurde (z. B. `"start_url": "index.html?launcher=homescreen"`), kann für Analysen und Anpassungen nützlich sein.
  Diese Informationen könnten jedoch Teil des digitalen Fingerabdrucks eines Benutzers werden.
  Ziehen Sie die möglichen Datenschutzimplikationen in Betracht, wenn Sie solche Verfolgungen implementieren.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifest-Datei für Ihre Wander-App befindet sich unter `https://hiking-pro.com/resources/manifest.json` und `https://hiking-pro.com/index.html` verlinkt auf die Manifest-Datei.
Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifest-Datei wie folgt angeben:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url`-Wert ist gültig, weil er den gleichen Ursprung wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) hat.

Der folgende `start_url` ist ungültig, weil er nicht denselben Ursprung wie die Manifest-URL hat:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In diesem Fall wird `https://hiking-pro.com/index.html` als Standard-Startseite verwendet, wenn Benutzer die App starten.

### Angabe einer relativen Start-URL

Für Ihre Wander-App im vorherigen Szenario können Sie denselben Startpunkt mit einer relativen URL angeben, wie unten gezeigt.
Diese relative URL wird auf `https://hiking-pro.com/trail-hub.html` aufgelöst, indem die URL der Manifest-Datei (`https://hiking-pro.com/resources/manifest.json`) als Basis verwendet wird.

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
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [Sicherheit im Web](/de/docs/Web/Security)
