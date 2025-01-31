---
title: scope
slug: Web/Manifest/Reference/scope
l10n:
  sourceCommit: ab4090ce439d9ea25229a8583a138b2f8fa8a74e
---

{{QuickLinksWithSubpages("/de/docs/Web/Manifest/Reference")}}

Das `scope`-Manifestmitglied wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält. Wenn Benutzer Ihre Web-App installieren und verwenden, bieten Seiten _innerhalb des Geltungsbereichs_ eine app-ähnliche Oberfläche. Wenn Benutzer zu Seiten außerhalb des App-Geltungsbereichs navigieren, erleben sie immer noch die app-ähnliche Oberfläche, aber Browser zeigen UI-Elemente wie die URL-Leiste an, um auf den geänderten Kontext hinzuweisen.

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

    Wenn `scope` im Manifest nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder `start_url` liegt nicht im angegebenen `scope`), wird der effektive Geltungsbereich auf den Wert von `start_url` festgelegt, nachdem dessen Dateiname, Abfrage und Fragment entfernt wurden.

## Beschreibung

Das `scope`-Mitglied definiert die URLs, die Teil der installierten Erfahrung Ihrer Web-App sind. Browser verwenden `scope`, um zu bestimmen, ob sich eine Seite im {{Glossary("Application_context", "Anwendungskontext")}} Ihrer Web-App befindet.

### Verhalten von innerhalb und außerhalb des Geltungsbereichs

Eine URL wird als "innerhalb des Geltungsbereichs" betrachtet, wenn ihr Pfad mit dem in `scope` definierten URL-Pfad beginnt. Zum Beispiel, wenn der `scope` auf `/app/` gesetzt ist, dann werden die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` alle als innerhalb des Geltungsbereichs betrachtet, während `/` oder `/page.html` es nicht sind.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine app-ähnliche Oberfläche. Für Seiten im Geltungsbereich erhalten Browser den Anwendungskontext und bewahren die app-ähnliche Erfahrung. Wenn Benutzer zu Seiten außerhalb des App-Geltungsbereichs navigieren, erleben sie immer noch die app-ähnliche Oberfläche; jedoch zeigen Browser in diesen Seiten zusätzliche UI-Elemente wie die URL-Leiste an. Dies hilft Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Geltungsbereichs der App betrachten.

> [!NOTE]
> Das `scope`-Mitglied verhindert nicht, dass Benutzer zu App-Seiten außerhalb des definierten Geltungsbereichs navigieren. Navigationen außerhalb des Geltungsbereichs werden von Browsern nicht blockiert und nicht in einem neuen Top-Level-Browsing-Kontext geöffnet.

Betrachten Sie eine Web-App zum Erforschen von Wanderwegen mit der folgenden Verzeichnisstruktur:

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
- Beim Navigieren zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des Geltungsbereichs der App liegen, bleibt die app-ähnliche Oberfläche erhalten, aber Benutzer sehen die Website-Adresse und andere Browser-Steuerelemente (Bild rechts).

| Seite im Geltungsbereich                                                                                        | Seite außerhalb des Geltungsbereichs                                                                                         |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| ![Seite mit Wanderwegliste, die eine app-ähnliche Oberfläche ohne Browser-Steuerelemente zeigt](trail-list.png) | ![Blog-Seite, die die Website-Adresse und Browser-Steuerelemente bei beibehaltener app-ähnlicher Oberfläche zeigt](blog.png) |

### Auswirkungen des Geltungsbereichs auf tief verlinkte Seiten

Andere Anwendungen können direkt auf spezifische Seiten Ihrer Web-App verlinken. Das `scope`-Mitglied beeinflusst, wie diese tief verlinkten Seiten angezeigt werden, ist jedoch nicht erforderlich, damit das tiefe Verlinken funktioniert.

Betrachten Sie das vorherige Beispiel der Web-App zum Erkunden von Wanderwegen, wobei der `scope` auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, sehen Benutzer, die die Trail Navigator-App installiert haben, diese Seite in der App-Oberfläche ohne Browser-Steuerelemente.
- Wenn ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt wird, sehen diese Benutzer die Blog-Seite in der app-ähnlichen Oberfläche, jedoch mit sichtbarer Website-Adresse und Browser-Steuerelementen, da sie außerhalb des definierten App-Geltungsbereichs liegt.

Dieses Verhalten hilft Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des App-Geltungsbereichs betrachten, auch wenn sie auf App-Seiten über externe Links zugreifen.

### Fallback-Verhalten des Geltungsbereichs

Der `scope` ist ungültig, wenn `start_url` keine Teilmenge der `scope`-URL ist. Zum Beispiel:

- **Gültig**: `scope` ist `/app/`, und `start_url` ist `/app/home.html`.
- **Ungültig**: `scope` ist `/app/`, und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird es standardmäßig auf den `start_url`-Wert nach Entfernung seines Dateinamens, seine Abfrage und seines Fragments gesetzt. Beachten Sie, dass, wenn `start_url` auch undefiniert (oder ungültig) ist, es standardmäßig auf die Seite gesetzt wird, die mit dem Manifest verknüpft ist. Dies stellt sicher, dass der Geltungsbereich standardmäßig auf der Seite beginnt, die die Installation ausgelöst hat.

Zum Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, wird der Geltungsbereich `https://example.com/app/` sein.
- Wenn `start_url` `/pages/welcome.html` ist, wird der Geltungsbereich `/pages/` auf demselben Ursprung sein.
- Wenn `start_url` `/pages/` ist (der nachgestellte Schrägstrich ist wichtig), wird der Geltungsbereich `/pages/` sein.

Wenn Sie sich auf das Fallback-Verhalten von `scope` verlassen, stellen Sie sicher, dass die URLs aller Seiten in Ihrer App mit dem Elter-Pfad von `start_url` beginnen. Um Probleme mit der Geltungsbereichsbestimmung auf diese Weise zu vermeiden, wird empfohlen, `scope` explizit in Ihrer Manifestdatei anzugeben.

### Matching-Mechanismus des Geltungsbereichs

Der String-Abgleich für die Geltungsbereichs-URL verwendet einen einfachen Präfix-Abgleich, nicht die Pfadstruktur. Zum Beispiel, wenn der `scope` als `/prefix` gesetzt ist, wird er URLs abgleichen, die mit `/prefix` beginnen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`. Beachten Sie, dass `/prefix-of/index.html` übereinstimmt, selbst wenn `prefix-of` keine genaue Übereinstimmung mit dem Geltungsbereich `/prefix` ist.

Aus diesem Grund wird empfohlen, einen Geltungsbereich mit einem abschließenden `/` zu definieren. Das Setzen des `scope` als `/prefix/` stellt sicher, dass er nur die Seiten innerhalb des `/prefix/`-Verzeichnisses erfasst und unbeabsichtigte Übereinstimmungen verhindert.

## Beispiele

### Festlegung einer absoluten URL für den Geltungsbereich

Angenommen, die Manifestdatei für Ihre Web-App ist von `https://hikingapp.com/index.html` verlinkt, und Sie möchten, dass der Geltungsbereich alle Unterverzeichnisse umfasst. Sie können diesen Geltungsbereich mit einer absoluten URL festlegen, die same-origin wie die Manifestdatei-URL ist, wie unten gezeigt. Dies stellt sicher, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Festlegung einer relativen URL für den Geltungsbereich

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie möchten, dass der Geltungsbereich `https://hikingapp.com/app/` ist, können Sie ihn als relative URL definieren:

```json
{
  "scope": "../app/"
}
```

### Definition einer Web-App für einen bestimmten Abschnitt Ihrer Website

Wenn Sie eine Website mit mehreren Abschnitten haben, aber möchten, dass sich Ihre Web-App auf einen bestimmten Abschnitt konzentriert, können Sie den `scope` wie folgt definieren:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

Mit dieser Konfiguration sind Seiten wie `https://hikingapp.com/store/products` Teil Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Geltungsbereichs Ihrer Web-App. Für URLs außerhalb des Geltungsbereichs können Browser verschiedene UI-Elemente anzeigen, um Benutzern mitzuteilen, dass sie den Geltungsbereich der App verlassen haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Manifest/Reference/start_url) Manifestmitglied
- {{Glossary("Application_context", "Anwendungskontext")}}
