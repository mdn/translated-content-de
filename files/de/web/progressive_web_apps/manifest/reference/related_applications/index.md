---
title: related_applications
slug: Web/Progressive_web_apps/Manifest/Reference/related_applications
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{SeeCompatTable}}

Das `related_applications` Manifestmitglied wird verwendet, um eine oder mehrere native Anwendungen anzugeben, die mit Ihrer Webanwendung in Beziehung stehen.
Es kann zusammen mit dem [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Manifestmitglied verwendet werden, das eine Präferenz für die Installation entweder einer verwandten nativen Anwendung oder Ihrer Webanwendung angibt.

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
  - : Ein Array von Objekten, die jeweils eine plattformspezifische native Anwendung repräsentieren, die mit der Web-App in Beziehung steht. Jedes Objekt muss eine `platform`-Eigenschaft sowie mindestens eine `url` oder eine `id` (oder beides) enthalten.
    - `platform`
      - : Ein String, der die Plattform identifiziert, auf der die Anwendung zu finden ist.
        Beispiele umfassen `amazon` (Amazon App Store), `play` (Google Play Store) und `windows` (Windows Store).
        Siehe die vollständige Liste der möglichen [Plattformwerte](https://github.com/w3c/manifest/wiki/Platforms).
    - `url` {{Optional_Inline}}
      - : Ein String, der die URL repräsentiert, unter der die plattformspezifische Anwendung zu finden ist.
        Falls nicht angegeben, muss eine `id` bereitgestellt werden.
    - `id` {{Optional_Inline}}
      - : Ein String mit der ID, die verwendet wird, um die Anwendung auf der angegebenen Plattform darzustellen.
        Falls nicht angegeben, muss eine `url` bereitgestellt werden.

## Beschreibung

Eine "related application" ist eine {{Glossary("native", "native")}} Anwendung, die ähnliche Funktionalität wie Ihre Web-App bietet, oft mit zusätzlichen Funktionen oder besserer Integration mit den Geräten der Nutzer.

Das `related_applications` Manifestmitglied ermöglicht es Ihnen, die plattformspezifischen nativen Anwendungen zu identifizieren, die mit Ihrer Web-App in Beziehung stehen.
Zum Beispiel, wenn Sie eine native Android-App für Ihr Produkt im Google Play Store haben.
Diese bietet die gleichen Kernfunktionen wie Ihre Web-App und integriert sich besser mit dem Benachrichtigungssystem des Geräts.
Sie können `related_applications` verwenden, um diese native Android-App in der Manifestdatei Ihrer Web-App anzugeben.

Einige wichtige Punkte über das `related_applications` Mitglied sind:

- Es erlaubt Ihnen, mehrere verwandte Apps auf verschiedenen Plattformen anzugeben, wodurch Nutzern Optionen für native Apps auf verschiedenen Geräten und Betriebssystemen geboten werden.
- Es schafft eine unidirektionale Beziehung zwischen Ihrer Web-App und den angegebenen nativen Apps.
  Die nativen Apps müssen nicht im Gegenzug Ihre Web-App referenzieren.
- Die Daten können von Webcrawlern verwendet werden, um mehr Informationen über die nativen Apps zu sammeln, die mit Ihrer Web-App in Beziehung stehen, was potenziell die Auffindbarkeit dieser nativen Apps verbessern kann.

- Wenn es zusammen mit dem auf `true` gesetzten [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Mitglied verwendet wird, ermöglicht es Browsern, die Installation der verwandten nativen App vorzuschlagen, anstelle Ihrer Web-App.

  > [!NOTE]
  > Für Chromium-basierte Browser sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Web-App installierbar zu machen.

## Beispiele

### Eine verwandte native Anwendung angeben

Dieses Beispiel zeigt, wie Sie eine verwandte native Android-App in der Manifestdatei Ihrer Web-App spezifizieren können. Es verwendet minimale Informationen, um die native App im Google Play Store zu identifizieren:

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

Wenn Sie den Browsern mitteilen möchten, dass Sie es vorziehen, den Nutzern die Option zu geben, Ihre native App, die im Google App Store verfügbar ist, anstelle Ihrer Web-App zu installieren, können Sie `prefer_related_applications` auf `true` setzen. Browser können dann Nutzern vorschlagen, die native Android-App anstelle Ihrer Web-App zu installieren.

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

- [`prefer_related_applications`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/prefer_related_applications) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps)
