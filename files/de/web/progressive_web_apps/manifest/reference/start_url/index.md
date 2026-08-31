---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 61f27416f7cfa79bd102042eeb3e44fe629d9c95
---

Das `start_url`-Manifestmitglied wird verwendet, um die URL festzulegen, die geöffnet werden sollte, wenn ein Benutzer Ihre Webanwendung startet, beispielsweise wenn er auf das Symbol der Anwendung auf dem Startbildschirm seines Geräts oder in einer Anwendungsübersicht tippt.

> [!NOTE]
> Der `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) in der Handhabung von `start_url` und müssen nicht immer den angegebenen Wert verwenden.

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
  - : Ein String, der die Start-URL einer Web-App repräsentiert.
    Die URL kann absolut oder relativ sein.
    Wenn der Wert relativ ist, wird er in Bezug auf die URL der Manifestdatei aufgelöst.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder nicht {{Glossary("origin", "same-origin")}} wie die Seite, die auf das Manifest verweist), wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > In einigen Browsern _muss_ die `start_url` angegeben werden, damit eine [PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) (siehe den Kompatibilitätsabschnitt unten).
    > Sie können `"start_url": "./"` setzen, um das Standardverhalten in allen Browsern zu verwenden.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) im Manifest nicht angegeben ist, wird er aus der `start_url` (oder der effektiven `start_url`, wenn der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Die `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Nutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite aus, die er gerade ansieht.
Während der Installation ruft der Browser die mit dieser Seite verknüpfte Manifestdatei ab.
Obwohl die Manifestdatei von jedem Origin bereitgestellt werden kann, ist der Installationsprozess an die Seite gebunden, auf der er begonnen wird.
Betrachten Sie ein Szenario, in dem:

- Die Installationsseite `https://myapp.example.com/index.html` ist.
- Die Manifestdatei unter `https://assets.cdn.com/manifest.json` gehostet wird.
- Die `start_url` `https://myapp.example.com/home` ist.

Die angegebene `start_url` in diesem Beispiel wird verwendet, da sie dasselbe Origin wie die Seite hat, von der die App installiert wird.
Wenn die angegebene `start_url` auf einem anderen Origin wäre (zum Beispiel `https://differentapp.example.com/home`), würden Browser auf die Installationsseiten-URL als Ausgangspunkt zurückgreifen.
Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Origins starten.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie könnten den angegebenen Wert ignorieren oder Benutzern die Wahl lassen, ihn nicht zu verwenden.
Sie könnten auch Nutzern erlauben, die URL anzupassen, wenn sie ein Lesezeichen für die Web-App erstellen oder zu einem späteren Zeitpunkt.
Berücksichtigen Sie dies beim Entwerfen Ihrer App, um Variationen in der `start_url` zu ermöglichen.

### Beste Praktiken

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App führen, wie z.B. einem Dashboard.
Berücksichtigen Sie Funktionen, auf die Benutzer direkt nach dem Start der App zugreifen möchten.
Wenn die Hauptseite Ihrer App im Root Ihrer Website liegt, können Sie die `start_url` auf `/` setzen.
Sie können auch einen Deep Link (z.B. `https://myapp.com/product/whatsnew`) spezifizieren, um Benutzer auf spezifische Inhalte innerhalb Ihrer App zu lenken.
Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss die `start_url` dasselbe Origin wie die Manifest-URL haben.
Wenn eine nicht gleiche-Origin-`start_url` angegeben wird, verwenden Browser die Seite, die auf das Manifest verweist, als Standardstartseite.

## Datenschutzüberlegungen

- **Fingerabdruck**:

  Das Codieren von Zeichenfolgen in `start_url`, um Benutzer eindeutig zu identifizieren (z.B. serverseitige Kennungen wie `?user=123`, `/user/123/` oder `https://user123.example.com`), erzeugt einen dauerhaften Fingerabdruck.
  Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzsensiblen Informationen bestehen bleiben können, selbst nachdem sie die Standortdaten gelöscht haben.
  Es ist schlechte Praxis, Informationen in `start_url` aufzunehmen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutz vor dieser Art von Fingerabdrücken bieten.
  Wenn Benutzer beispielsweise Daten von einem Origin löschen, könnten Browser sie auffordern, Apps zu deinstallieren, die in den Umfang dieses Origins fallen.
  Dies entfernt jeden potenziellen Fingerabdruck von der `start_url` der App.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einer `start_url`, um anzuzeigen, dass die App von außerhalb des Browsers gestartet wurde (z.B. `"start_url": "index.html?launcher=homescreen"`) kann für Analysen und Anpassungen nützlich sein.
  Diese Informationen könnten jedoch als Teil des digitalen Fingerabdrucks eines Benutzers verwendet werden.
  Berücksichtigen Sie die potenziellen Datenschutzimplikationen bei der Implementierung einer solchen Verfolgung.

## Beispiele

### Festlegen einer absoluten Start-URL

Nehmen wir an, die Manifestdatei für Ihre Wanderweb-App befindet sich unter `https://hiking-pro.com/resources/manifest.json` und `https://hiking-pro.com/index.html` verweist auf die Manifestdatei.
Sie möchten, dass Benutzer auf der `trail-hub.html`-Seite landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifestdatei wie folgt angeben:

```json
{ "start_url": "https://hiking-pro.com/trail-hub.html" }
```

Dieser `start_url`-Wert ist gültig, weil er dasselbe Origin wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) hat.

Der folgende `start_url` ist ungültig, weil er nicht dasselbe Origin wie die Manifest-URL hat:

```json example-bad
{ "start_url": "https://other-domain.com/trail-hub.html" }
```

In diesem Fall wird `https://hiking-pro.com/index.html` als Standardstartseite verwendet, wenn Benutzer die App starten.

### Festlegen einer relativen Start-URL

Für Ihre Wander-App im vorherigen Szenario können Sie denselben Startpunkt mit einer relativen URL angeben, wie unten gezeigt.
Diese relative URL wird mithilfe der Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) als Basis zu `https://hiking-pro.com/trail-hub.html` aufgelöst.

```json
{ "start_url": "../trail-hub.html" }
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{Glossary("Application_context", "Anwendungskontext")}}
- {{Glossary("Same-origin_policy", "Same-Origin-Policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [Sicherheit im Web](/de/docs/Web/Security)
