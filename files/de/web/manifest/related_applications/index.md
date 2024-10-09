---
title: related_applications
slug: Web/Manifest/related_applications
l10n:
  sourceCommit: 74a4aacec4ef6178f6a80b85a8fa2723b64ca7e4
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Der `related_applications` Manifest-Mitglied wird verwendet, um eine oder mehrere native Anwendungen anzugeben, die mit Ihrer Webanwendung verwandt sind.
Es kann zusammen mit dem [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) Manifest-Mitglied verwendet werden, das eine Präferenz für die Installation entweder einer verwandten nativen Anwendung oder Ihrer Webanwendung angibt.

## Syntax

```json-nolint
/* Related native application on one platform specified by both url and id */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  }
]

/* Related native application on one platform specfied only by id */
"related_applications": [
  {
    "platform": "windows",
    "id": "example.app1"
  }
]

/* Related native applications on two platforms */
"related_applications": [
  {
    "platform": "play",
    "url": "https://play.google.com/store/apps/details?id=com.example.app1",
    "id": "com.example.app1"
  },
  {
    "platform": "amazon",
    "url": "https://www.amazon.com/product/dp/B000XA1000"
  }
]
```

### Werte

- `related_applications`

  - : Ein Array von Objekten, die jeweils eine plattformspezifische native Anwendung repräsentieren, die zur Web-App gehört. Jedes Objekt muss eine `platform` Eigenschaft und mindestens eine der entweder `url` oder `id` (oder beide) enthalten.

    - `platform`
      - : Ein String, der die Plattform identifiziert, auf der die Anwendung gefunden werden kann. Beispiele umfassen `amazon` (Amazon App Store), `play` (Google Play Store) und `windows` (Windows Store). Sehen Sie sich die vollständige Liste der möglichen [Platform-Werte](https://github.com/w3c/manifest/wiki/Platforms) an.
    - `url` {{Optional_Inline}}
      - : Ein String, der die URL darstellt, bei der die plattformspezifische Anwendung gefunden werden kann. Wenn nicht angegeben, muss eine `id` bereitgestellt werden.
    - `id` {{Optional_Inline}}
      - : Ein String mit der ID, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen. Wenn nicht angegeben, muss eine `url` bereitgestellt werden.

## Beschreibung

Eine "verwandte Anwendung" ist eine {{Glossary("native", "native")}} Anwendung, die Funktionsweise ähnlich Ihrer Web-App bietet, oft mit zusätzlichen Funktionen oder besserer Integration mit den Geräten der Benutzer.

Der `related_applications` Manifest-Mitglied ermöglicht es Ihnen, die plattformspezifischen nativen Anwendungen zu identifizieren, die mit Ihrer Web-App verwandt sind.
Zum Beispiel, nehmen wir an, Sie haben eine native Android App für Ihr Produkt, die über den Google Play Store verfügbar ist.
Sie bietet die gleichen Kernfunktionen wie Ihre Web-App und integriert sich besser mit dem Benachrichtigungssystem des Geräts.
Sie können `related_applications` verwenden, um diese native Android App in der Manifestdatei Ihrer Web-App anzugeben.

Einige wichtige Punkte zum `related_applications` Mitglied beinhalten:

- Es erlaubt Ihnen, mehrere verwandte Apps auf verschiedenen Plattformen anzugeben, um den Benutzern Optionen für native Apps auf verschiedenen Geräten und Betriebssystemen zu geben.
- Es erstellt eine unidirektionale Beziehung zwischen Ihrer Web-App und den angegebenen nativen Apps. Die nativen Apps müssen im Gegenzug nicht Ihre Web-App referenzieren.
- Die Daten können von Web-Crawlern verwendet werden, um mehr Informationen über die nativen Apps zu sammeln, die mit Ihrer Web-App verbunden sind, und möglicherweise die Auffindbarkeit dieser nativen Apps zu verbessern.

- Wenn es mit dem `prefer_related_applications` Mitglied verwendet wird, das auf `true` gesetzt ist, ermöglicht es den Browsern, die Installation der verwandten nativen App anstelle Ihrer Web-App vorzuschlagen.

  > [!NOTE]
  > Für auf Chromium basierende Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Web-App installierbar zu machen.

## Beispiele

### Eine verwandte native Anwendung angeben

Dieses Beispiel zeigt, wie eine verwandte native Android App in der Manifestdatei Ihrer Web-App angegeben wird. Es verwendet minimale Informationen, um die auf dem Google Play Store verfügbare native App zu identifizieren:

```json
{
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.app1"
    }
  ]
}
```

### Verwandte native Anwendungen auf mehreren Plattformen angeben

Wenn native Versionen Ihrer Web-App sowohl im Google Play Store als auch im Windows Store verfügbar sind, können Sie sie in der Manifestdatei Ihrer Web-App wie folgt angeben:

```json
{
  "related_applications": [
    {
      "platform": "play",
      "url": "https://play.google.com/store/apps/details?id=com.example.app1",
      "id": "com.example.app1"
    },
    {
      "platform": "windows",
      "url": "https://apps.microsoft.com/store/detail/example-app1/9WZDNCRFHVJL"
    }
  ]
}
```

### Präferenz für die Installation einer verwandten nativen App angeben

Wenn Sie den Browsern anzeigen möchten, dass Sie es vorziehen, dass den Benutzern die Möglichkeit gegeben wird, Ihre native App, die im Google App Store verfügbar ist, anstelle Ihrer Web-App zu installieren, können Sie `prefer_related_applications` auf `true` setzen. Browser könnten die Benutzer dann auffordern, die native Android App anstelle Ihrer Web-App zu installieren.

```json
{
  "prefer_related_applications": true,
  "related_applications": [
    {
      "platform": "play",
      "id": "com.example.app1"
    }
  ]
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) Manifest-Mitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) um Ihre Web-App installierbar zu machen
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps)
