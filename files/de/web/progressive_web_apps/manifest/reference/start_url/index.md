---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 6d363614de8a40c33d1afe92e4e846b75beea986
---

Das `start_url`-Manifestmitglied wird verwendet, um die URL anzugeben, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, z. B. wenn er das Symbol der Anwendung auf dem Startbildschirm seines Geräts oder in einer Anwendungsliste berührt.

> [!NOTE]
> `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) bei der Handhabung von `start_url` und müssen nicht immer den angegebenen Wert verwenden.

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
    > In einigen Browsern _muss_ die `start_url` angegeben sein, damit eine [PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) (siehe den Kompatibilitätsabschnitt unten).
    > Sie können `"start_url": "./"` festlegen, um das Standardverhalten in allen Browsern zu verwenden.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) im Manifest nicht angegeben ist, wird er aus der `start_url` (oder der effektiven `start_url`, wenn der Wert nicht definiert oder ungültig ist) abgeleitet.

## Beschreibung

Die `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite, die er gerade ansieht. Während der Installation ruft der Browser die mit dieser Seite verknüpfte Manifestdatei ab. Während die Manifestdatei von jedem Ursprung bedient werden kann, ist der Installationsprozess an die Seite gebunden, bei der er beginnt. Stellen Sie sich folgendes Szenario vor:

- Die Installationsseite ist `https://myapp.example.com/index.html`.
- Die Manifestdatei ist unter `https://assets.cdn.com/manifest.json` gehostet.
- Die `start_url` ist `https://myapp.example.com/home`.

Die angegebene `start_url` in diesem Beispiel wird verwendet, da sie gleichen Ursprungs wie die Seite ist, von der die App installiert wird. Wäre die angegebene `start_url` von einem anderen Ursprung (zum Beispiel `https://differentapp.example.com/home`), würden Browser auf die URL der Installationsseite als Ausgangspunkt zurückgreifen. Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs gestartet werden.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden. Sie können den angegebenen Wert ignorieren oder den Benutzern die Wahl lassen, ihn nicht zu verwenden. Sie könnten auch den Benutzern erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern. Beachten Sie dies bei der Gestaltung Ihrer App, um Abweichungen in der `start_url` zu ermöglichen.

### Beste Praktiken

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App führen, wie z. B. einem Dashboard. Überlegen Sie, welche Funktionen Benutzer sofort nach dem Start der App zugreifen möchten. Wenn sich die Hauptseite Ihrer App im Stammverzeichnis Ihrer Website befindet, können Sie die `start_url` auf `/` setzen. Sie können auch einen tiefen Link (z. B. `https://myapp.com/product/whatsnew`) festlegen, um Benutzer zu spezifischen Inhalten innerhalb Ihrer App zu leiten. Vermeiden Sie die Angabe einer generischen Startseite.

Aus Sicherheitsgründen muss die `start_url` gleichen Ursprungs wie die Manifest-URL sein. Wenn eine nicht gleich-origine `start_url` angegeben wird, greifen Browser darauf zurück, die Seite zu verwenden, die auf das Manifest verweist, als Standardstartseite.

## Datenschutzhinweise

- **Fingerprinting**:

  Das Kodieren von Strings in `start_url` zur eindeutigen Identifizierung von Benutzern (z. B. serverseitige Kennungen, wie `?user=123`, `/user/123/` oder `https://user123.foo.bar`) erzeugt einen dauerhaften Fingerabdruck. Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzempfindlichen Informationen noch vorhanden sind, selbst wenn sie die Website-Daten gelöscht haben. Es ist schlechte Praxis, Informationen in `start_url` einzubinden, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutz gegen diese Art von Fingerprinting bieten. Beispielsweise können Benutzer möglicherweise dazu aufgefordert werden, Apps zu deinstallieren, die innerhalb des Bereichs dieses Ursprungs liegen, wenn sie Daten von einem Ursprung löschen. Dies entfernt jeden potenziellen Fingerabdruck aus der `start_url` der App.

- **Launch-Tracking**:

  Das Hinzufügen von Parametern zu einer `start_url`, um anzugeben, dass die App von außerhalb des Browsers gestartet wurde (z. B. `"start_url": "index.html?launcher=homescreen"`) kann für Analysen und Anpassungen nützlich sein. Diese Informationen könnten jedoch als Teil des digitalen Fingerabdrucks eines Benutzers verwendet werden. Berücksichtigen Sie die potenziellen Datenschutzimplikationen bei der Implementierung eines solchen Trackings.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifestdatei Ihrer Wander-Web-App befindet sich unter `https://hiking-pro.com/resources/manifest.json`, und `https://hiking-pro.com/index.html` verweist auf die Manifestdatei. Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten. Sie können diese Start-URL in Ihrer Manifestdatei folgendermaßen angeben:

```json
{ "start_url": "https://hiking-pro.com/trail-hub.html" }
```

Dieser `start_url`-Wert ist gültig, da er gleichen Ursprungs wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) ist.

Die folgende `start_url` ist ungültig, weil sie nicht den gleichen Ursprung wie die Manifest-URL hat:

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
- {{Glossary("Same-origin_policy", "Same-origin policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [Sicherheit im Web](/de/docs/Web/Security)
