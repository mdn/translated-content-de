---
title: start_url
slug: Web/Progressive_web_apps/Manifest/Reference/start_url
l10n:
  sourceCommit: 528aa3d7eae2fcd3be24acb626cab86478091491
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `start_url`-Manifestmitglied wird verwendet, um die URL anzugeben, die geöffnet werden soll, wenn ein Benutzer Ihre Webanwendung startet, etwa beim Tippen auf das Anwendungs-Icon auf dem Startbildschirm ihres Geräts oder in einer Anwendungsliste.

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

  - : Ein String, der die Start-URL einer Web-App darstellt.
    Die URL kann absolut oder relativ sein.
    Ist der Wert relativ, wird er relativ zur URL der Manifestdatei aufgelöst.

    Wenn `start_url` nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder nicht {{Glossary("origin", "same-origin")}} wie die Seite, die auf das Manifest verweist), wird die URL der Seite verwendet, die auf das Manifest verweist.

    > [!NOTE]
    > In einigen Browsern _muss_ `start_url` angegeben werden, damit eine [PWA installierbar ist](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#installability) (siehe den Kompatibilitätsabschnitt unten).
    > Sie können `"start_url": "./"` setzen, um das Standardverhalten in allen Browsern zu verwenden.

    > [!NOTE]
    > Wenn [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) im Manifest nicht angegeben ist, wird er aus der `start_url` (oder der effektiven `start_url`, falls der Wert undefiniert oder ungültig ist) abgeleitet.

## Beschreibung

Das `start_url` ermöglicht es Ihnen, einen geeigneten gemeinsamen Einstiegspunkt für alle Benutzer zu empfehlen.

Wenn ein Benutzer eine Web-App installiert, erfolgt die Installation über die Seite, die er gerade ansieht.
Während der Installation ruft der Browser die Manifestdatei ab, die mit dieser Seite verlinkt ist.
Obwohl die Manifestdatei von jedem Ursprung aus bedient werden kann, ist der Installationsprozess an die Seite gebunden, auf der er beginnt.
Betrachten Sie ein Szenario, in dem:

- Die Installationsseite `https://myapp.example.com/index.html` ist.
- Die Manifestdatei unter `https://assets.cdn.com/manifest.json` gehostet wird.
- Die `start_url` `https://myapp.example.com/home` ist.

Die angegebene `start_url` in diesem Beispiel wird verwendet, weil sie den gleichen Ursprung wie die Seite hat, von der aus die App installiert wird.
Wäre die angegebene `start_url` in einem anderen Ursprung (zum Beispiel, `https://differentapp.example.com/home`), würden Browser auf die URL der Installationsseite als Ausgangspunkt zurückgreifen.
Dies stellt sicher, dass Web-Apps nur auf Seiten innerhalb ihres eigenen Ursprungs starten.

Beachten Sie jedoch, dass Browser nicht verpflichtet sind, die angegebene URL zu verwenden.
Sie können den angegebenen Wert ignorieren oder den Benutzern die Wahl lassen, ihn nicht zu verwenden.
Sie können auch erlauben, dass Benutzer die URL beim Erstellen eines Lesezeichens für die Web-App oder zu einem späteren Zeitpunkt ändern.
Behalten Sie dies im Hinterkopf, wenn Sie Ihre App entwerfen, um Variationen in `start_url` zu ermöglichen.

### Beste Praktiken

Diese URL sollte Benutzer zu einer wichtigen Seite Ihrer App führen, wie einem Dashboard.
Berücksichtigen Sie Funktionen, auf die Benutzer unmittelbar nach dem Start der App zugreifen möchten.
Wenn sich die Hauptseite Ihrer App im Stammverzeichnis Ihrer Website befindet, können Sie `start_url` auf `/` setzen.
Sie können auch einen Deep-Link angeben (z. B., `https://myapp.com/product/whatsnew`), um Benutzer zu bestimmten Inhalten innerhalb Ihrer App zu führen.
Vermeiden Sie es, eine generische Startseite anzugeben.

Aus Sicherheitsgründen muss `start_url` den gleichen Ursprung wie die Manifest-URL haben.
Wenn ein `start_url` eines fremden Ursprungs angegeben wird, greifen Browser auf die Seite zurück, die auf das Manifest verweist, als Standardstartseite.

## Datenschutzüberlegungen

- **Fingerprinting**:

  Das Kodieren von Strings in `start_url`, um Benutzer eindeutig zu identifizieren (z. B. vom Server zugewiesene IDs wie `?user=123`, `/user/123/`, oder `https://user123.foo.bar`), erzeugt einen persistenten Fingerabdruck.
  Den Benutzern ist möglicherweise nicht bewusst, dass ihre datenschutzrelevanten Informationen bestehen bleiben können, selbst nachdem sie gespeicherte Daten gelöscht haben.
  Es ist schlechte Praxis, in `start_url` Informationen einzubeziehen, die Benutzer eindeutig identifizieren könnten.

  Browser können Schutz gegen diese Art des Fingerprintings bieten.
  Beispielsweise, wenn Benutzer Daten von einem Ursprung löschen, können Browser sie auffordern, Apps zu deinstallieren, die innerhalb des Geltungsbereichs dieses Ursprungs liegen.
  Dies entfernt jegliche potenziellen Fingerabdrücke von der `start_url` der App.

- **Startverfolgung**:

  Das Hinzufügen von Parametern zu einer `start_url`, um anzuzeigen, dass die App außerhalb des Browsers gestartet wurde (z. B. `"start_url": "index.html?launcher=homescreen"`), kann nützlich für Analysen und Anpassungen sein.
  Allerdings könnten diese Informationen Teil eines digitalen Fingerabdrucks eines Benutzers werden.
  Überlegen Sie die potentiellen Datenschutzimplikationen, wenn Sie eine solche Verfolgung implementieren.

## Beispiele

### Angabe einer absoluten Start-URL

Nehmen wir an, die Manifestdatei Ihrer Wander-Web-App befindet sich unter `https://hiking-pro.com/resources/manifest.json` und `https://hiking-pro.com/index.html` verweist auf die Manifestdatei.
Sie möchten, dass Benutzer auf der Seite `trail-hub.html` landen, wenn sie die App starten.
Sie können diese Start-URL in Ihrer Manifestdatei wie folgt angeben:

```json
"start_url": "https://hiking-pro.com/trail-hub.html"
```

Dieser `start_url`-Wert ist gültig, weil er den gleichen Ursprung wie die Manifest-URL (`https://hiking-pro.com/resources/manifest.json`) hat.

Der folgende `start_url` ist ungültig, da er nicht den gleichen Ursprung wie die Manifest-URL hat:

```json example-bad
"start_url": "https://other-domain.com/trail-hub.html"
```

In diesem Fall wird `https://hiking-pro.com/index.html` als Standardstartseite verwendet, wenn Benutzer die App starten.

### Angabe einer relativen Start-URL

Für Ihre Wander-App in dem vorherigen Szenario können Sie denselben Startpunkt mithilfe einer relativen URL angeben, wie unten gezeigt.
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
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) um Ihre Web-App installierbar zu machen
- [Sicherheit im Web](/de/docs/Web/Security)
