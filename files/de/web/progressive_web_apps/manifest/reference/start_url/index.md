---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `start_url`-Manifestmitglied wird verwendet, um die URL zu spezifizieren, die geöffnet werden sollte, wenn ein Benutzer Ihre Webanwendung startet, zum Beispiel durch Tippen auf das Anwendungssymbol auf dem Startbildschirm des Geräts oder in einer Anwendungsübersicht.

> [!NOTE]
> Das `start_url` ist ein Hinweis für Browser. [Browser haben Flexibilität](#beschreibung) in der Handhabung von `start_url` und könnten nicht immer den angegebenen Wert verwenden.

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
    Wenn der Wert relativ ist, wird er gegen die URL der Manifestdatei aufgelöst.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder nicht {{Glossary("origin", "same-origin")}} wie die Seite, die auf das Manifest verweist), wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) im Manifest nicht angegeben ist, wird es aus dem `start_url` (oder effektivem `start_url`, wenn der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Das `start_url` erlaubt es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation von der Seite aus, die er gerade ansieht.
Während der Installation ruft der Browser die Manifestdatei ab, die von dieser Seite verlinkt ist.
Obwohl die Manifestdatei von jedem Ursprung bereitgestellt werden kann, ist der Installationsprozess an die Seite gebunden, auf der er beginnt.
Betrachten Sie folgendes Szenario:

- Die Installationsseite ist `https://myapp.example.com/index.html`.
- Die Manifestdatei wird unter `https://assets.cdn.com/manifest.json` gehostet.
- Das `start_url` ist `https://myapp.example.com/home`.

Das in diesem Beispiel angegebene `start_url` wird verwendet, weil es im gleichen Ursprung liegt wie die Seite, von der die App installiert wird.
Wenn das angegebene `start_url` einem anderen Ursprung angehören würde (zum Beispiel `https://differentapp.example.com/home`), würden Browser auf die Installationsseiten-URL als Startpunkt zurückgreifen.
Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs starten.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie können den angegebenen Wert ignorieren oder den Benutzern die Wahl lassen, ihn nicht zu verwenden.
Sie können Benutzern auch erlauben, die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt zu ändern.
Berücksichtigen Sie dies bei der Gestaltung Ihrer App, um Variationen im `start_url` zu ermöglichen.

### Beste Praktiken

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App führen, wie einem Dashboard.
Berücksichtigen Sie Funktionen, auf die Benutzer unmittelbar nach dem Start der App zugreifen möchten.
Wenn die Hauptseite Ihrer App im Root Ihrer Seite liegt, können Sie das `start_url` auf `/` setzen.
Sie können auch einen tiefen Link angeben (z.B. `https://myapp.com/product/whatsnew`), um Benutzer zu speziellen Inhalten innerhalb Ihrer App zu leiten.
Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss das `start_url` im gleichen Ursprung wie die Manifest-URL sein.
Wenn ein nicht gleich-originiges `start_url` angegeben wird, greifen Browser auf die Seite zurück, die das Manifest verlinkt, als Standardstartseite zurück.

## Datenschutzüberlegungen

- **Fingerprinting**:

  Das Kodieren von Strings in `start_url`, um Benutzer eindeutig zu identifizieren (z.B. serverseitig zugewiesene Bezeichner, wie `?user=123`, `/user/123/`, oder `https://user123.foo.bar`) erzeugt einen dauerhaften Fingerabdruck.
  Benutzer sind sich möglicherweise nicht bewusst, dass ihre datenschutzsensiblen Informationen auch nach dem Löschen von Standortdaten bestehen bleiben können.
  Es ist schlechte Praxis, jegliche Informationen in `start_url` einzubeziehen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutz gegen diese Art des Fingerprintings bieten.
  Wenn Benutzer beispielsweise Daten von einem Ursprung löschen, können Browser sie dazu auffordern, Apps zu deinstallieren, die innerhalb des Bereichs dieses Ursprungs liegen.
  Dies entfernt jegliche potenziellen Fingerabdrücke aus dem `start_url` der App.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einem `start_url`, um anzugeben, dass die App außerhalb des Browsers gestartet wurde (z.B. `"start_url": "index.html?launcher=homescreen"`) kann für die Analyse und Anpassungen nützlich sein.
  Diese Informationen könnten jedoch Teil des digitalen Fingerabdrucks eines Benutzers werden.
  Berücksichtigen Sie die möglichen Datenschutzimplikationen bei der Implementierung solcher Tracking-Mechanismen.

## Beispiele

### Festlegung einer absoluten Start-URL

Angenommen, die Manifestdatei für Ihre Wander-Web-App befindet sich unter `https://hiking-pro.com/resources/manifest.json`, und `https://hiking-pro.com/index.html` verlinkt die Manifestdatei.
Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifestdatei wie folgt spezifizieren:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url`-Wert ist gültig, da er denselben Ursprung wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) hat.

Der folgende `start_url` ist ungültig, da er nicht den gleichen Ursprung wie die Manifest-URL hat:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In diesem Fall wird `https://hiking-pro.com/index.html` als Standardstartseite verwendet, wenn Benutzer die App starten.

### Festlegung einer relativen Start-URL

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

- {{Glossary("Application_context", "Anwendungskontext")}}
- {{Glossary("Same-origin_policy", "Same-origin policy")}}
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [Sicherheit im Web](/de/docs/Web/Security)
