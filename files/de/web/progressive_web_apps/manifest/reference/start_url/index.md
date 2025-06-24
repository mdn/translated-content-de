---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Das `start_url`-Manifestmitglied wird verwendet, um die URL anzugeben, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, z. B. beim Antippen des Anwendungssymbols auf dem Startbildschirm seines Geräts oder in einer Anwendungsliste.

> [!NOTE]
> Das `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) beim Umgang mit `start_url` und verwenden möglicherweise nicht immer den angegebenen Wert.

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

    Wenn `start_url` nicht angegeben wird oder der Wert ungültig ist (d.h. nicht ein String, keine gültige URL oder nicht {{Glossary("origin", "gleicher Ursprung")}} wie die Seite, die auf das Manifest verweist), wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > In einigen Browsern _muss_ das `start_url` angegeben werden, damit eine [PWA installiert werden kann](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) (siehe unten den Abschnitt zur Kompatibilität).
    > Sie können `"start_url": "./"` setzen, um das Standardverhalten in allen Browsern zu verwenden.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) im Manifest nicht angegeben ist, wird er vom `start_url` (oder effektivem `start_url`, wenn der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Das `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite, die er aktuell ansieht.
Während der Installation ruft der Browser die Manifestdatei ab, die von dieser Seite verlinkt ist.
Obwohl die Manifestdatei von jedem Ursprung aus geliefert werden kann, ist der Installationsprozess an die Seite gebunden, auf der er beginnt.
Betrachten Sie ein Szenario, in dem:

- Die Installationsseite `https://myapp.example.com/index.html` ist.
- Die Manifestdatei bei `https://assets.cdn.com/manifest.json` gehostet wird.
- Das `start_url` ist `https://myapp.example.com/home`.

Das angegebene `start_url` in diesem Beispiel wird verwendet, weil es den gleichen Ursprung wie die Seite hat, von der die App installiert wird.
Wenn das angegebene `start_url` auf einem anderen Ursprung wäre (z. B. `https://differentapp.example.com/home`), würden Browser auf die Verwendung der Installationsseiten-URL als Startpunkt zurückgreifen.
Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs starten.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie können den angegebenen Wert ignorieren oder Benutzern die Möglichkeit geben, ihn nicht zu verwenden.
Sie können Benutzern auch erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern.
Behalten Sie dies bei der Gestaltung Ihrer App im Auge, um Variationen im `start_url` zu ermöglichen.

### Beste Praktiken

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App navigieren, z. B. einem Dashboard.
Berücksichtigen Sie Funktionen, die Benutzer sofort nach dem Start der App erhalten möchten.
Wenn die Hauptseite Ihrer App sich im Stammverzeichnis Ihrer Website befindet, können Sie das `start_url` auf `/` setzen.
Sie können auch einen tiefen Link angeben (z. B. `https://myapp.com/product/whatsnew`), um Benutzer zu spezifischen Inhalten innerhalb Ihrer App zu führen.
Vermeiden Sie die Angabe einer generischen Startseite.

Aus Sicherheitsgründen muss das `start_url` den gleichen Ursprung wie die Manifest-URL haben.
Wenn ein `start_url` mit unterschiedlichem Ursprung angegeben wird, werden Browser auf die Verwendung der Seite zurückgreifen, die auf das Manifest als standardmäßige Startseite verweist.

## Datenschutzüberlegungen

- **Fingerprinting**:

  Das Kodieren von Zeichenfolgen in `start_url`, um Benutzer eindeutig zu identifizieren (z. B. serverseitige Kennungen wie `?user=123`, `/user/123/` oder `https://user123.foo.bar`), erstellt einen persistierenden Fingerabdruck.
  Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzrelevanten Informationen bestehen bleiben können, selbst nachdem sie die Seitendaten gelöscht haben.
  Es ist schlechte Praxis, Informationen in `start_url` aufzunehmen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutzmaßnahmen gegen diese Art des Fingerprintings bieten.
  Zum Beispiel, wenn Benutzer Daten von einem Ursprung löschen, können Browser sie auffordern, Apps zu deinstallieren, die im Geltungsbereich dieses Ursprungs liegen.
  Dies entfernt jeden potenziellen Fingerabdruck aus dem `start_url` der App.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einem `start_url`, um anzuzeigen, dass die App von außerhalb des Browsers gestartet wurde (z. B. `"start_url": "index.html?launcher=homescreen"`), kann für Analysen und Anpassungen nützlich sein.
  Diese Informationen könnten jedoch Teil eines digitalen Fingerabdrucks eines Benutzers sein.
  Berücksichtigen Sie die möglichen Datenschutzimplikationen bei der Implementierung einer solchen Verfolgung.

## Beispiele

### Angabe einer absoluten Start-URL

Angenommen, die Manifestdatei für Ihre Wanderweb-App befindet sich unter `https://hiking-pro.com/resources/manifest.json`, und `https://hiking-pro.com/index.html` verweist auf die Manifestdatei.
Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifestdatei wie folgt angeben:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url`-Wert ist gültig, da er den gleichen Ursprung wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) hat.

Der folgende `start_url` ist ungültig, da er nicht den gleichen Ursprung wie die Manifest-URL hat:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In diesem Fall wird `https://hiking-pro.com/index.html` als standardmäßige Startseite verwendet, wenn Benutzer die App starten.

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
- {{Glossary("Same-origin_policy", "Same-Origin-Policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [Sicherheit im Web](/de/docs/Web/Security)
