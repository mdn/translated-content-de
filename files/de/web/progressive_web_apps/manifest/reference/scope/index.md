---
title: scope
slug: Web/Progressive_web_apps/Manifest/Reference/scope
l10n:
  sourceCommit: 2f6ddccbafddcea8f2b68eb4a78b9764892916b3
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `scope`-Manifestmitglied wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält.
Wenn Benutzer Ihre Web-App installieren und verwenden, bieten Seiten _innerhalb des Geltungsbereichs_ eine app-ähnliche Oberfläche.
Wenn Benutzer zu Seiten außerhalb des App-Geltungsbereichs navigieren, erleben sie weiterhin die app-ähnliche Oberfläche, aber Browser zeigen UI-Elemente wie die URL-Leiste an, um den Kontextwechsel anzuzeigen.

## Syntax

```json-nolint
/* Absolute URL */
"scope": "https://example.com/myapp/"

/* Relative URL */
"scope": "/myapp/"

/* Scope limited to a specific directory */
"scope": "/myapp/dashboard/"
```

### Werte

- `scope`

  - : Ein String, der eine URL darstellt.
    Die URL kann absolut oder relativ sein.
    Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    Wenn `scope` im Manifest nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder `start_url` nicht innerhalb des angegebenen `scope` liegt), wird der effektive Geltungsbereich auf den Wert von `start_url` gesetzt, nachdem Dateiname, Anfrage und Fragment entfernt wurden.

## Beschreibung

Das `scope`-Mitglied definiert die URLs, die Teil der Installationserfahrung Ihrer Web-App sind.
Browser verwenden `scope`, um zu bestimmen, ob eine Seite innerhalb des {{Glossary("Application_context", "Anwendungszusammenhangs")}} Ihrer Web-App liegt.

### Innerhalb des Geltungsbereichs und außerhalb des Geltungsbereichs Verhalten

Eine URL wird als "innerhalb des Geltungsbereichs" betrachtet, wenn ihr Pfad mit dem in `scope` definierten URL-Pfad beginnt.
Beispielsweise, wenn der `scope` auf `/app/` gesetzt ist, dann werden die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` alle als innerhalb des Geltungsbereichs betrachtet, während `/` oder `/page.html` es nicht sind.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine app-ähnliche Oberfläche.
Für Seiten innerhalb des Geltungsbereichs halten Browser den Anwendungszusammenhang aufrecht und bewahren das app-ähnliche Erlebnis.
Wenn Benutzer zu Seiten außerhalb des App-Geltungsbereichs navigieren, erleben sie weiterhin die app-ähnliche Oberfläche; jedoch zeigen Browser auf diesen Seiten zusätzliche UI-Elemente wie die URL-Leiste an.
Dies hilft den Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Geltungsbereichs der App betrachten.

> [!NOTE]
> Das `scope`-Mitglied verhindert nicht, dass Benutzer zu App-Seiten außerhalb des definierten Geltungsbereichs navigieren.
> Navigationsaktionen außerhalb des Geltungsbereichs werden von Browsern nicht blockiert und dürfen in einem neuen obersten Browserkontext geöffnet werden.

Betrachten Sie eine Web-App zur Erkundung von Wanderwegen mit der folgenden Verzeichnisstruktur:

```plain
web-app/
├── manifest.json
├── trails/
│   ├── index.html
│   ├── trail-list.html
│   ├── settings/
│   │   └── index.html
│   └── saratoga-gap-trail.html
├── blog/
│   └── index.html
```

Mit dem Geltungsbereich auf `/trails/` gesetzt:

- Beim Anzeigen von Seiten und Unterverzeichnissen unter `/trails/` (wie `trail-list.html` und `/trails/settings/index.html`) erleben Benutzer die app-ähnliche Oberfläche ohne die Browser-Steuerelemente (Bild links).
- Bei der Navigation zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des Geltungsbereichs der App liegen, bleibt die app-ähnliche Oberfläche erhalten, aber die Website-Adresse und andere Browser-Steuerelemente sind sichtbar (Bild rechts).

| Seite im Geltungsbereich                                                                                             | Seite außerhalb des Geltungsbereichs                                                                                           |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| ![Seite mit Wanderwegauflistung, die eine app-ähnliche Oberfläche ohne Browser-Steuerelemente zeigt](trail-list.png) | ![Blog-Seite, die die Website-Adresse und Browser-Steuerelemente zeigt, aber eine app-ähnliche Oberfläche beibehält](blog.png) |

### Einfluss des Geltungsbereichs auf tief verlinkte Seiten

Andere Anwendungen können direkt auf bestimmte Seiten Ihrer Web-App verlinken.
Das `scope`-Mitglied beeinflusst, wie diese tief verlinkten Seiten angezeigt werden, es ist jedoch nicht erforderlich, damit das tiefe Verlinken funktioniert.

Betrachten Sie das obige Beispiel der Web-App zur Erkundung von Wanderwegen, wobei der `scope` auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, werden Benutzer mit installierter Trail Navigator-App diese Seite in der App-Oberfläche ohne Browser-Steuerelemente sehen.
- Wenn ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt wird, sehen diese Benutzer die Blog-Seite in der app-ähnlichen Oberfläche, aber mit der sichtbaren Website-Adresse und Browser-Steuerelementen, da sie außerhalb des definierten Geltungsbereichs der App liegt.

Dieses Verhalten hilft Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des App-Geltungsbereichs betrachten, selbst wenn sie über externe Links auf die App-Seiten zugreifen.

### Fallback-Geltungsbereichsverhalten

Der `scope` ist ungültig, wenn `start_url` keine Teilmenge der `scope`-URL ist. Beispiel:

- **Gültig**: `scope` ist `/app/`, und `start_url` ist `/app/home.html`.
- **Ungültig**: `scope` ist `/app/`, und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird es auf den `start_url`-Wert zurückgesetzt, nachdem Dateiname, Anfrage und Fragment entfernt wurden.
Beachten Sie, dass, wenn `start_url` ebenfalls undefiniert (oder ungültig) ist, es standardmäßig auf die Seite gesetzt wird, die auf das Manifest verweist.
Dies stellt sicher, dass der Geltungsbereich standardmäßig von der Seite beginnt, die die Installation ausgelöst hat.

Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, ist der Geltungsbereich `https://example.com/app/`.
- Wenn `start_url` `/pages/welcome.html` ist, ist der Geltungsbereich `/pages/` auf demselben Ursprung.
- Wenn `start_url` `/pages/` ist (der abschließende Schrägstrich ist wichtig), ist der Geltungsbereich `/pages/`.

Wenn Sie sich auf das Rückfallverhalten des `scope` verlassen, stellen Sie sicher, dass URLs aller Seiten in Ihrer App mit dem übergeordneten Pfad von `start_url` beginnen.
Um Probleme mit der Bestimmung des Geltungsbereichs auf diese Weise zu vermeiden, wird empfohlen, `scope` ausdrücklich in Ihrer Manifestdatei anzugeben.

### Mechanismus zur Bereichsbestimmung

Die Zeichenfolge zum Abgleichen der Geltungsbereichs-URL verwendet eine einfache Präfixübereinstimmung, nicht die Pfadstruktur.
Wenn beispielsweise der `scope` als `/prefix` angegeben ist, werden URLs abgeglichen, die mit `/prefix` beginnen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`. Beachten Sie, dass `/prefix-of/index.html` übereinstimmt, auch wenn `prefix-of` kein exakter Übereinstimmung mit dem Geltungsbereich `/prefix` ist.

Aus diesem Grund wird empfohlen, einen Geltungsbereich mit einem abschließenden `/` zu definieren.
Durch Setzen des `scope` als `/prefix/` wird sichergestellt, dass nur die Seiten im `/prefix/`-Verzeichnis abgeglichen werden, was unbeabsichtigte Übereinstimmungen verhindert.

## Beispiele

### Spezifizierung einer absoluten URL für den Geltungsbereich

Angenommen, die Manifestdatei für Ihre Web-App ist von `https://hikingapp.com/index.html` verlinkt, und Sie möchten, dass der Geltungsbereich alle Unterverzeichnisse umfasst. Sie können diesen Geltungsbereich mit einer absoluten URL angeben, die denselben Ursprung wie die Manifest-URL hat, wie unten gezeigt. Dies stellt sicher, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Spezifizierung einer relativen URL für den Geltungsbereich

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie möchten, dass der Geltungsbereich `https://hikingapp.com/app/` ist, können Sie ihn als relative URL definieren:

```json
{
  "scope": "../app/"
}
```

### Definition einer Web-App für einen bestimmten Abschnitt Ihrer Website

Wenn Sie eine Website mit mehreren Abschnitten haben, aber möchten, dass sich Ihre Web-App auf einen bestimmten Abschnitt konzentriert, können Sie den `scope` definieren als:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

Mit dieser Konfiguration sind Seiten wie `https://hikingapp.com/store/products` Teil Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Geltungsbereichs Ihrer Web-App. Für URLs außerhalb des Geltungsbereichs können Browser unterschiedliche UI-Elemente anzeigen, um Benutzer darüber zu informieren, dass sie den Geltungsbereich der App verlassen haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifestmitglied
- {{Glossary("Application_context", "Anwendungszusammenhang")}}
