---
title: start_url
slug: Web/Manifest/Reference/start_url
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `start_url` Manifest-Element wird verwendet, um die URL anzugeben, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, zum Beispiel durch Tippen auf das Anwendungs-Icon auf dem Startbildschirm des Geräts oder in einer Anwendungsliste.

> [!NOTE]
> Das `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) im Umgang mit `start_url` und verwenden möglicherweise nicht immer den angegebenen Wert.

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

  - : Ein String, der die Start-URL einer Web-App darstellt. Die URL kann absolut oder relativ sein. Wenn der Wert relativ ist, wird er relativ zur URL der Manifest-Datei aufgelöst.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig (d. h. kein String, keine gültige URL oder nicht {{Glossary("origin", "gleich-origin")}} mit der Seite, die auf das Manifest verweist) ist, wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Manifest/Reference/scope) im Manifest nicht angegeben ist, wird er aus dem `start_url` (oder dem effektiven `start_url`, wenn der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Der `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer vorzuschlagen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite, die er gerade betrachtet. Während der Installation ruft der Browser die an diese Seite verknüpfte Manifest-Datei ab. Obwohl die Manifest-Datei von jedem Ursprung bedient werden kann, ist der Installationsprozess an die Seite gebunden, auf der er beginnt. Stellen Sie sich ein Szenario vor, in dem:

- Die Installationsseite ist `https://myapp.example.com/index.html`.
- Die Manifest-Datei wird unter `https://assets.cdn.com/manifest.json` gehostet.
- Das `start_url` ist `https://myapp.example.com/home`.

Das in diesem Beispiel angegebene `start_url` wird verwendet, da es zum selben Ursprung wie die Seite gehört, von der die App installiert wird. Wenn das angegebene `start_url` einen anderen Ursprung hätte (z. B. `https://differentapp.example.com/home`), würden Browser auf die Verwendung der Installationsseiten-URL als Startpunkt zurückgreifen. Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs starten.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden. Sie können den angegebenen Wert ignorieren oder den Benutzern die Möglichkeit geben, ihn nicht zu verwenden. Sie können Benutzern auch erlauben, die URL zu ändern, wenn sie ein Lesezeichen für die Web-App erstellen oder später. Denken Sie daran, wenn Sie Ihr App-Design anpassen, um Variationen in `start_url` zuzulassen.

### Best Practices

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App führen, wie einem Dashboard. Berücksichtigen Sie Funktionen, die Benutzer unmittelbar nach dem Start der App nutzen möchten. Wenn die Hauptseite Ihrer App am Anfang Ihrer Website ist, können Sie das `start_url` auf `/` setzen. Sie können auch einen Deep Link angeben (z. B. `https://myapp.com/product/whatsnew`), um Benutzer zu spezifischen Inhalten innerhalb Ihrer App zu leiten. Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss das `start_url` denselben Ursprung wie die Manifest-URL haben. Wenn ein `start_url` mit unterschiedlichem Ursprung angegeben wird, verwenden Browser die Seite, die auf das Manifest verweist, als standardmäßige Startseite.

## Datenschutzüberlegungen

- **Fingerprinting**:

  Das Kodieren von Strings in `start_url`, um Benutzer eindeutig zu identifizieren (z. B. serverzugewiesene Identifikatoren, wie `?user=123`, `/user/123/`, oder `https://user123.foo.bar`), erstellt einen persistierenden Fingerabdruck. Benutzer sind sich möglicherweise nicht bewusst, dass ihre privatsphärensensiblen Informationen bestehen bleiben, selbst nachdem sie die Website-Daten gelöscht haben. Es ist eine schlechte Praxis, Informationen in `start_url` zu inkludieren, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutzmaßnahmen gegen diese Art von Fingerprinting anbieten. Zum Beispiel, wenn Benutzer Daten von einem Ursprung löschen, können Browser sie auffordern, Apps zu deinstallieren, die innerhalb des Bereichs dieses Ursprungs liegen. Dies entfernt jeden potenziellen Fingerabdruck aus dem `start_url` der App.

- **Startverfolgung**:

  Parameter zu einem `start_url` hinzuzufügen, um anzuzeigen, dass die App von außerhalb des Browsers gestartet wurde (z. B. `"start_url": "index.html?launcher=homescreen"`), kann für Analysen und Anpassungen nützlich sein. Diese Informationen könnten jedoch als Teil eines digitalen Fingerabdrucks eines Benutzers verwendet werden. Berücksichtigen Sie die potenziellen Datenschutzimplikationen bei der Implementierung solcher Verfolgung.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifest-Datei Ihrer Wanderapp befindet sich unter `https://hiking-pro.com/resources/manifest.json` und `https://hiking-pro.com/index.html` verweist auf die Manifest-Datei. Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten. Sie können diese Start-URL in Ihrer Manifest-Datei folgendermaßen angeben:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url`-Wert ist gültig, da er denselben Ursprung wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) hat.

Der folgende `start_url` ist ungültig, da er nicht denselben Ursprung wie die Manifest-URL hat:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In diesem Fall wird `https://hiking-pro.com/index.html` als standardmäßige Startseite verwendet, wenn Benutzer die App starten.

### Angabe einer relativen Start-URL

Für Ihre Wanderapp im vorherigen Szenario können Sie denselben Ausgangspunkt mit einer relativen URL angeben, wie unten gezeigt. Diese relative URL wird unter Verwendung der URL der Manifest-Datei (`https://hiking-pro.com/resources/manifest.json`) als Basis zu `https://hiking-pro.com/trail-hub.html` aufgelöst.

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
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installierbarkeit Ihrer Web-App
- [Sicherheit im Web](/de/docs/Web/Security)
