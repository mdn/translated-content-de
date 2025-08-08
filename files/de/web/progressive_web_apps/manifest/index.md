---
title: Web-Anwendungsmanifest
short-title: Web app manifest
slug: Web/Progressive_web_apps/Manifest
l10n:
  sourceCommit: 5f2a755c4fa7d126f85b56fbca90b15c5f039eff
---

Ein **Web-Anwendungsmanifest**, definiert in der [Web Application Manifest](https://w3c.github.io/manifest/) Spezifikation, ist eine {{Glossary("JSON", "JSON")}}-Textdatei, die Informationen über eine Webanwendung bereitstellt.

Der häufigste Verwendungszweck eines Web-Anwendungsmanifests ist, dem Browser die Informationen bereitzustellen, die er benötigt, um eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) auf einem Gerät zu installieren, wie z.B. den Namen und das Symbol der App.

Ein Web-Anwendungsmanifest enthält ein einzelnes JSON-Objekt, bei dem die Schlüssel auf oberster Ebene als _Mitglieder_ bezeichnet werden.

## Mitglieder

Dieser Abschnitt listet [Referenzseiten für die Manifestmitglieder](/de/docs/Web/Progressive_web_apps/Manifest/Reference) auf, die auf MDN dokumentiert sind. In der Spezifikation sind alle Mitglieder optional, aber einige Anwendungen erfordern, dass bestimmte Mitglieder vorhanden sind. Zum Beispiel müssen [PWAs bestimmte Manifestmitglieder bereitstellen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members).

{{ListSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

> [!NOTE]
> Die Mitglieder `dir`, `lang`, und `iarc_rating_id` sind nicht implementiert.

## Beispielmanifest

```json
{
  "short_name": "MDN",
  "name": "MDN Web Docs",
  "icons": [
    {
      "src": "/favicon-192x192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/favicon-512x512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ],
  "start_url": ".",
  "display": "standalone",
  "theme_color": "black",
  "background_color": "white"
}
```

## Bereitstellen eines Manifests

Web-App-Manifeste werden in Ihren HTML-Seiten mithilfe eines {{HTMLElement("link")}}-Elements im {{HTMLElement("head")}} eines Dokuments bereitgestellt:

```html
<link rel="manifest" href="manifest.json" />
```

Die `.webmanifest`-Erweiterung ist in der [Media-Type-Registration](https://w3c.github.io/manifest/#media-type-registration) Sektion der Spezifikation festgelegt (die Antwort der Manifestdatei sollte `Content-Type: application/manifest+json` zurückgeben). Browser unterstützen generell auch Manifeste mit anderen geeigneten Erweiterungen wie `.json` (`Content-Type: application/json`).

Wenn das Manifest Anmeldeinformationen benötigt, um abgerufen zu werden, muss das [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) Attribut auf `use-credentials` gesetzt werden, selbst wenn sich die Manifestdatei im selben Ursprung wie die aktuelle Seite befindet.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Splashscreens

In einigen Browsern und Betriebssystemen wird beim Starten einer installierten PWA ein Splashscreen angezeigt. Dieser Splashscreen wird automatisch generiert und sein Erscheinungsbild wird durch Mitglieder im Web-App-Manifest definiert, insbesondere:

- [`name`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/name)
- [`background_color`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/background_color)
- [`icons`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/icons)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps)
