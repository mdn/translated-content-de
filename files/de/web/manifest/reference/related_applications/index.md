---
title: related_applications
slug: Web/Manifest/Reference/related_applications
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}{{SeeCompatTable}}

Das `related_applications`-Manifestmitglied wird verwendet, um eine oder mehrere native Apps anzugeben, die mit Ihrer Webanwendung in Zusammenhang stehen.
Es kann zusammen mit dem [`prefer_related_applications`](/de/docs/Web/Manifest/Reference/prefer_related_applications)-Manifestmitglied verwendet werden, das eine Präferenz für die Installation entweder einer verwandten nativen Anwendung oder Ihrer Webanwendung angibt.

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

  - : Ein Array von Objekten, von denen jedes eine plattformspezifische native App repräsentiert, die mit der Web-App verbunden ist. Jedes Objekt muss eine `platform`-Eigenschaft und mindestens eine von entweder einer `url` oder einer `id` (oder beide) enthalten.

    - `platform`
      - : Ein String, der die Plattform identifiziert, auf der die Anwendung zu finden ist.
        Beispiele sind `amazon` (Amazon App Store), `play` (Google Play Store) und `windows` (Windows Store).
        Siehe die vollständige Liste der möglichen [platform values](https://github.com/w3c/manifest/wiki/Platforms).
    - `url` {{Optional_Inline}}
      - : Ein String, der die URL darstellt, unter der die plattformspezifische Anwendung zu finden ist.
        Wenn nicht angegeben, muss eine `id` bereitgestellt werden.
    - `id` {{Optional_Inline}}
      - : Ein String mit der ID, die zur Repräsentation der Anwendung auf der angegebenen Plattform verwendet wird.
        Wenn nicht angegeben, muss eine `url` bereitgestellt werden.

## Beschreibung

Eine "verwandte Anwendung" ist eine {{Glossary("native", "native")}} Anwendung, die eine ähnliche Funktionalität wie Ihre Web-App bietet, oft mit zusätzlichen Funktionen oder besserer Integration mit den Geräten der Benutzer.

Das `related_applications`-Manifestmitglied ermöglicht es Ihnen, die plattformspezifischen nativen Anwendungen zu identifizieren, die mit Ihrer Web-App in Zusammenhang stehen.
Zum Beispiel, wenn Sie eine native Android-App für Ihr Produkt haben, die über den Google Play Store erhältlich ist.
Sie bietet die gleichen Kernfunktionen wie Ihre Web-App und integriert sich besser in das Benachrichtigungssystem des Geräts.
Sie können `related_applications` verwenden, um diese native Android-App in der Manifestdatei Ihrer Web-App anzugeben.

Einige wichtige Punkte über das `related_applications`-Mitglied sind:

- Es ermöglicht Ihnen, mehrere verwandte Apps auf verschiedenen Plattformen anzugeben und den Benutzern Optionen für native Apps auf verschiedenen Geräten und Betriebssystemen zu bieten.
- Es schafft eine unidirektionale Beziehung zwischen Ihrer Web-App und den angegebenen nativen Apps.
  Die nativen Apps müssen im Gegenzug nicht Ihre Web-App referenzieren.
- Die Daten können von Web-Crawlern verwendet werden, um mehr Informationen über die mit Ihrer Web-App verbundenen nativen Apps zu sammeln, was potenziell die Auffindbarkeit dieser nativen Apps verbessern kann.

- Wenn es zusammen mit dem [`prefer_related_applications`](/de/docs/Web/Manifest/Reference/prefer_related_applications)-Mitglied mit dem Wert `true` verwendet wird, erlaubt es den Browsern, die Installation der verwandten nativen App anstelle Ihrer Web-App vorzuschlagen.

  > [!NOTE]
  > Für Browser auf Chromium-Basis sollte `prefer_related_applications` auf `false` gesetzt oder weggelassen werden, um Ihre Web-App installierbar zu machen.

## Beispiele

### Spezifizieren einer verwandten nativen Anwendung

Dieses Beispiel zeigt, wie man eine verwandte native Android-App in der Manifestdatei Ihrer Web-App spezifiziert. Es wird minimale Information verwendet, um die native App im Google Play Store zu identifizieren:

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

### Spezifizieren verwandter nativer Anwendungen auf mehreren Plattformen

Wenn native Versionen Ihrer Web-App sowohl im Google Play Store als auch im Windows Store verfügbar sind, können Sie sie in der Manifestdatei Ihrer Web-App wie folgt spezifizieren:

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

Wenn Sie den Browsern anzeigen möchten, dass Sie es vorziehen, dass den Benutzern die Option gegeben wird, Ihre native App, die im Google App Store verfügbar ist, anstelle Ihrer Web-App zu installieren, können Sie `prefer_related_applications` auf `true` setzen. Browser können dann die Benutzer auffordern, die native Android-App anstelle Ihrer Web-App zu installieren.

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

- [`prefer_related_applications`](/de/docs/Web/Manifest/Reference/prefer_related_applications) Manifestmitglied
- [Das Web-App-Manifest](/de/docs/Web/Progressive_web_apps/Guides/Making_PWAs_installable#the_web_app_manifest), um Ihre Web-App installierbar zu machen
- [`Navigator.getInstalledRelatedApps()`](/de/docs/Web/API/Navigator/getInstalledRelatedApps)
