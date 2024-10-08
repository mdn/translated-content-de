---
title: Web-App-Manifeste
slug: Web/Manifest
l10n:
  sourceCommit: a295e56b0f0f2d05dd7775bf85881e73dec898da
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}

Ein **Web-Anwendungsmanifest**, definiert in der [Web Application Manifest](https://w3c.github.io/manifest/) Spezifikation, ist eine {{Glossary("JSON", "JSON")}} Textdatei, die Informationen über eine Webanwendung bereitstellt.

Der häufigste Zweck eines Web-Anwendungsmanifestes ist es, dem Browser Informationen bereitzustellen, die benötigt werden, um eine [progressive Web-App](/de/docs/Web/Progressive_web_apps) (PWA) auf einem Gerät zu installieren, wie zum Beispiel den Namen der App und das Icon.

Ein Web-Anwendungsmanifest enthält ein einzelnes JSON-Objekt, bei dem die Schlüssel auf der obersten Ebene _Mitglieder_ genannt werden.

## Mitglieder

Dieser Abschnitt listet die Mitglieder auf, die im Manifest erscheinen können.

Alle Mitglieder sind in der Spezifikation optional, aber einige Anwendungen erfordern, dass bestimmte Mitglieder vorhanden sind. Zum Beispiel müssen [PWAs bestimmte Manifestmitglieder bereitstellen](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#required_manifest_members).

{{ListSubpages("/de/docs/Web/Manifest")}}

> [!NOTE]
> Die Mitglieder `dir`, `lang`, `iarc_rating_id` und `note_taking` sind nicht implementiert.

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
  "theme_color": "#000000",
  "background_color": "#ffffff"
}
```

## Bereitstellung eines Manifests

Web-App-Manifeste werden in Ihren HTML-Seiten unter Verwendung eines {{HTMLElement("link")}}-Elements im {{HTMLElement("head")}} eines Dokuments bereitgestellt:

```html
<link rel="manifest" href="manifest.json" />
```

Die `.webmanifest`-Erweiterung ist im Abschnitt [Medientyp-Registrierung](https://w3c.github.io/manifest/#media-type-registration) der Spezifikation festgelegt (die Antwort der Manifestdatei sollte `Content-Type: application/manifest+json` zurückgeben). Browser unterstützen in der Regel Manifeste mit anderen geeigneten Erweiterungen wie `.json` (`Content-Type: application/json`).

Falls das Manifest Berechtigungen zum Abrufen erfordert, muss das [`crossorigin`](/de/docs/Web/HTML/Attributes/crossorigin)-Attribut auf `use-credentials` gesetzt werden, auch wenn sich die Manifestdatei im selben Ursprung wie die aktuelle Seite befindet.

```html
<link rel="manifest" href="/app.webmanifest" crossorigin="use-credentials" />
```

## Startbildschirme

In einigen Browsern und Betriebssystemen wird ein Startbildschirm angezeigt, wenn eine installierte PWA gestartet wird. Dieser Startbildschirm wird automatisch generiert, und sein Aussehen wird durch Mitglieder im Web-App-Manifest definiert, insbesondere:

- [`name`](/de/docs/Web/Manifest/name)
- [`background_color`](/de/docs/Web/Manifest/background_color)
- [`icons`](/de/docs/Web/Manifest/icons)

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Progressive Web Apps (PWAs)](/de/docs/Web/Progressive_web_apps)
