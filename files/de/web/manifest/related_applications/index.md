---
title: related_applications
slug: Web/Manifest/related_applications
l10n:
  sourceCommit: c749deb4ccb647d792deee4807d4852104bedd9d
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest")}}{{SeeCompatTable}}

Das `related_applications` Manifest-Mitglied wird verwendet, um eine oder mehrere native Anwendungen zu spezifizieren, die mit Ihrer Webanwendung in Beziehung stehen. Es kann zusammen mit dem [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) Manifest-Mitglied verwendet werden, das eine Präferenz für die Installation entweder einer verwandten nativen Anwendung oder Ihrer Webanwendung angibt.

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

/* Related native application on one platform specified only by id */
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

  - : Ein Array von Objekten, die jeweils eine plattform-spezifische native Anwendung darstellen, die mit der Web-App verwandt ist. Jedes Objekt muss eine `platform`-Eigenschaft und mindestens eine `url` oder eine `id` (oder beide) enthalten.

    - `platform`
      - : Ein String, der die Plattform identifiziert, auf der die Anwendung zu finden ist. Beispiele sind `amazon` (Amazon App Store), `play` (Google Play Store) und `windows` (Windows Store). Siehe die vollständige Liste der möglichen [Plattformwerte](https://github.com/w3c/manifest/wiki/Platforms).
    - `url` {{Optional_Inline}}
      - : Ein String, der die URL darstellt, unter der die plattform-spezifische Anwendung zu finden ist. Falls nicht angegeben, muss eine `id` bereitgestellt werden.
    - `id` {{Optional_Inline}}
      - : Ein String mit der ID, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen. Falls nicht angegeben, muss eine `url` bereitgestellt werden.

## Beschreibung

Eine "verwandte Anwendung" ist eine {{Glossary("native", "native")}} Anwendung, die ähnliche Funktionalität wie Ihre Web-App bietet, oft mit zusätzlichen Features oder besserer Integration mit den Geräten der Nutzer.

Das `related_applications` Manifest-Mitglied ermöglicht es Ihnen, die plattform-spezifischen nativen Anwendungen zu identifizieren, die mit Ihrer Web-App verwandt sind. Beispielsweise könnten Sie eine native Android-App für Ihr Produkt haben, die über den Google Play Store verfügbar ist. Sie bietet die gleichen Kernfunktionen wie Ihre Web-App und integriert sich besser in das Benachrichtigungssystem des Geräts. Sie können `related_applications` verwenden, um diese native Android-App im Manifest Ihrer Web-App zu spezifizieren.

Einige wichtige Punkte über das `related_applications` Mitglied sind:

- Es ermöglicht Ihnen, mehrere verwandte Apps auf verschiedenen Plattformen anzugeben, wodurch den Nutzern native Apps für verschiedene Geräte und Betriebssysteme zur Verfügung gestellt werden.
- Es schafft eine unidirektionale Beziehung zwischen Ihrer Web-App und den angegebenen nativen Apps. Die nativen Apps müssen nicht im Gegenzug auf Ihre Web-App verweisen.
- Die Daten können von Web-Crawlern verwendet werden, um mehr Informationen über die nativen Apps zu sammeln, die mit Ihrer Web-App in Beziehung stehen, was die Auffindbarkeit dieser nativen Apps potenziell verbessern könnte.

- Wenn das [`prefer_related_applications`](/de/docs/Web/Manifest/prefer_related_applications) Mitglied auf `true` gesetzt wird, ermöglicht es Browsern, die Installation der verwandten nativen App anstelle Ihrer Web-App vorzuschlagen.

  > [!NOTE]
  > Für auf Chromium basierende Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Web-App installierbar zu machen.

## Beispiele

### Spezifizierung einer verwandten nativen Anwendung

Dieses Beispiel zeigt, wie Sie eine verwandte native Android-App im Manifest Ihrer Web-App angeben. Es verwendet minimale Informationen, um die native App zu identifizieren, die im Google Play Store verfügbar ist:

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

### Spezifizierung verwandter nativer Anwendungen auf mehreren Plattformen

Wenn native Versionen Ihrer Web-App sowohl im Google Play Store als auch im Windows Store verfügbar sind, können Sie sie im Manifest Ihrer Web-App wie folgt angeben:

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

### Angabe der Präferenz für die Installation einer verwandten nativen App

Wenn Sie Browsern anzeigen möchten, dass Sie es bevorzugen, den Nutzern die Möglichkeit zu geben, Ihre native App, die im Google App Store verfügbar ist, zu installieren statt Ihrer Web-App, können Sie `prefer_related_applications` auf `true` setzen. Browser können dann die Nutzer auffordern, die native Android-App anstelle Ihrer Web-App zu installieren.

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
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest) für die Installierbarkeit Ihrer Web-App
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps)
