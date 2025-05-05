---
title: scope
slug: Web/Progressive_web_apps/Manifest/Reference/scope
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das `scope`-Manifestmitglied wird verwendet, um den obersten URL-Pfad anzugeben, der die Seiten und Unterverzeichnisse Ihrer Webanwendung enthält. Wenn Benutzer Ihre Web-App installieren und verwenden, bieten Seiten _innerhalb des Geltungsbereichs_ eine app-ähnliche Oberfläche. Wenn Benutzer zu Seiten außerhalb des App-Geltungsbereichs navigieren, erleben sie immer noch die app-ähnliche Oberfläche, aber Browser zeigen UI-Elemente wie die Adressleiste an, um auf den geänderten Kontext hinzuweisen.

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

  - : Ein String, der eine URL darstellt. Die URL kann absolut oder relativ sein. Wenn der Wert relativ ist, wird er relativ zur URL der Manifestdatei aufgelöst.

    Wenn `scope` im Manifest nicht angegeben ist oder der Wert ungültig ist (d.h. kein String, keine gültige URL oder `start_url` nicht innerhalb des angegebenen `scope` liegt), wird der effektive Geltungsbereich auf den `start_url`-Wert gesetzt, nachdem der Dateiname, die Abfrage und das Fragment entfernt wurden.

## Beschreibung

Das `scope`-Mitglied definiert die URLs, die Teil der installierten Erfahrung Ihrer Web-App sind. Browser verwenden `scope`, um zu bestimmen, ob sich eine Seite im {{Glossary("Application_context", "Anwendungskontext")}} Ihrer Web-App befindet.

### Verhalten innerhalb und außerhalb des Geltungsbereichs

Eine URL wird als "innerhalb des Geltungsbereichs" betrachtet, wenn ihr Pfad mit dem in `scope` definierten URL-Pfad beginnt. Zum Beispiel, wenn `scope` auf `/app/` gesetzt ist, dann werden die URLs `/app/`, `/app/page.html` und `/app/dashboard/index.html` als innerhalb des Geltungsbereichs betrachtet, während `/` oder `/page.html` nicht dazu gehören.

Wenn Benutzer Ihre installierte Web-App öffnen, erleben sie eine app-ähnliche Oberfläche. Für Seiten im Geltungsbereich erhalten Browser den Anwendungskontext und bewahren das app-ähnliche Erlebnis. Wenn Benutzer zu Seiten außerhalb des App-Geltungsbereichs navigieren, erleben sie weiterhin im Großen und Ganzen die app-ähnliche Oberfläche; jedoch zeigen Browser auf diesen Seiten zusätzliche UI-Elemente wie die Adressleiste an. Dies hilft Benutzern zu verstehen, dass sie Seiten außerhalb des definierten Geltungsbereichs der App anzeigen.

> [!NOTE]
> Das `scope`-Mitglied verhindert nicht, dass Benutzer zu Seiten außerhalb des definierten Geltungsbereichs der App navigieren. Navigieren außerhalb des Geltungsbereichs wird von Browsern nicht blockiert und kann in einem neuen obersten Browser-Kontext geöffnet werden.

Betrachten Sie eine Web-App zur Erkundung von Wanderwegen mit folgender Verzeichnisstruktur:

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

Mit dem auf `/trails/` gesetzten Geltungsbereich:

- Beim Betrachten von Seiten und Unterverzeichnissen unter `/trails/` (wie `trail-list.html` und `/trails/settings/index.html`) erleben Benutzer die app-ähnliche Oberfläche ohne die Browser-Steuerelemente (Bild links).
- Beim Navigieren zu Seiten in Unterverzeichnissen wie `/blog/`, die außerhalb des App-Geltungsbereichs liegen, bleibt die app-ähnliche Oberfläche erhalten, aber Benutzer sehen die Website-Adresse und andere Browser-Steuerelemente (Bild rechts).

| Seite im Geltungsbereich                                                                                         | Seite außerhalb des Geltungsbereichs                                                                              |
| ---------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| ![Seite zur Auflistung von Wanderwegen mit app-ähnlicher Oberfläche ohne Browser-Steuerelemente](trail-list.png) | ![Blog-Seite mit Website-Adresse und Browser-Steuerelementen bei beibehaltenem app-ähnlichem Interface](blog.png) |

### Auswirkungen des Geltungsbereichs auf tief verlinkte Seiten

Andere Anwendungen können direkt auf bestimmte Seiten Ihrer Web-App verlinken. Das `scope`-Mitglied beeinflusst, wie diese tief verlinkten Seiten angezeigt werden, ist aber nicht erforderlich, damit Deep-Linking funktioniert.

Betrachten Sie das vorherige Beispiel der Web-App zur Erkundung von Wanderwegen, bei dem `scope` auf `/trails/` gesetzt ist:

- Wenn ein Link zu `https://trailnav.app/trails/saratoga-gap-trail.html` in sozialen Medien geteilt wird, sehen Benutzer mit der installierten Trail Navigator App diese Seite in der Oberfläche der App ohne Browser-Steuerelemente.
- Wenn ein Link zu `https://trailnav.app/blog/trail-safety.html` geteilt wird, sehen diese Benutzer die Blog-Seite im app-ähnlichen Interface, aber mit sichtbarer Website-Adresse und Browser-Steuerelementen, da sie außerhalb des definierten App-Geltungsbereichs liegt.

Dieses Verhalten hilft Benutzern zu verstehen, ob sie Seiten innerhalb oder außerhalb des App-Geltungsbereichs betrachten, selbst beim Zugriff auf App-Seiten über externe Links.

### Fallback-Verhalten des Geltungsbereichs

Der `scope` ist ungültig, wenn `start_url` keine Teilmenge der `scope`-URL ist. Zum Beispiel:

- **Gültig**: `scope` ist `/app/` und `start_url` ist `/app/home.html`.
- **Ungültig**: `scope` ist `/app/` und `start_url` ist `/index.html`.

Wenn `scope` fehlt oder ungültig ist, wird er auf den `start_url`-Wert gesetzt, nachdem dessen Dateiname, Abfrage und Fragment entfernt wurden. Beachten Sie, dass, wenn der `start_url` ebenfalls nicht definiert ist (oder ungültig), er auf die Seite zurückfällt, die auf das Manifest verlinkt. Dies stellt sicher, dass standardmäßig der Geltungsbereich von der Seite beginnt, die die Installation ausgelöst hat.

Zum Beispiel:

- Wenn `start_url` `https://example.com/app/index.html?user=123#home` ist, wird der Geltungsbereich `https://example.com/app/`.
- Wenn `start_url` `/pages/welcome.html` ist, wird der Geltungsbereich `/pages/` am gleichen Ursprung.
- Wenn `start_url` `/pages/` ist (der abschließende Schrägstrich ist wichtig), wird der Geltungsbereich `/pages/`.

Wenn Sie sich auf das Fallback-Verhalten von `scope` verlassen, stellen Sie sicher, dass die URLs aller Seiten in Ihrer App mit dem übergeordneten Pfad von `start_url` beginnen. Um Probleme bei der Bestimmung des Geltungsbereichs zu vermeiden, wird empfohlen, `scope` explizit in Ihrer Manifestdatei anzugeben.

### Mechanismus zur Übereinstimmung des Geltungsbereichs

Die String-Übereinstimmung für die Geltungsbereich-URL verwendet eine einfache Präfixübereinstimmung, nicht die Pfadstruktur. Zum Beispiel, wenn der `scope` als `/prefix` gesetzt ist, wird er URLs, die mit `/prefix` beginnen, einschließlich `/prefix-of/index.html` und `/prefix/index.html`, entsprechen. Beachten Sie, dass `/prefix-of/index.html` auch übereinstimmt, obwohl `prefix-of` keine genaue Übereinstimmung mit dem Geltungsbereich `/prefix` ist.

Aus diesem Grund wird empfohlen, einen Geltungsbereich mit einem abschließenden `/` zu definieren. Wenn Sie den `scope` als `/prefix/` festlegen, wird sichergestellt, dass er nur die Seiten innerhalb des `/prefix/`-Verzeichnisses erfasst und unbeabsichtigte Übereinstimmungen verhindert.

## Beispiele

### Festlegen einer absoluten URL für den Geltungsbereich

Angenommen, die Manifestdatei Ihrer Web-App ist von `https://hikingapp.com/index.html` verlinkt, und Sie möchten, dass der Geltungsbereich alle Unterverzeichnisse umfasst. Sie können diesen Geltungsbereich mit einer absoluten URL festlegen, die den gleichen Ursprung wie die URL der Manifestdatei hat, wie unten gezeigt. Dies stellt sicher, dass Seiten wie `https://hikingapp.com/store` und `https://hikingapp.com/company` Teil Ihrer Web-App sind.

```json
{
  "scope": "https://hikingapp.com/"
}
```

### Festlegen einer relativen URL für den Geltungsbereich

Wenn die URL Ihrer Manifestdatei `https://hikingapp.com/resources/manifest.json` ist und Sie den Geltungsbereich auf `https://hikingapp.com/app/` festlegen möchten, können Sie ihn als relative URL definieren:

```json
{
  "scope": "../app/"
}
```

### Definieren einer Web-App für einen bestimmten Abschnitt Ihrer Website

Wenn Sie eine Website mit mehreren Abschnitten haben, aber Ihre Web-App auf einen bestimmten Abschnitt fokussieren möchten, können Sie den `scope` folgendermaßen definieren:

```json
{
  "name": "My Hiking Web App",
  "start_url": "https://hikingapp.com/store/",
  "scope": "https://hikingapp.com/store/"
}
```

Mit dieser Einrichtung sind Seiten wie `https://hikingapp.com/store/products` Teil Ihrer Web-App, aber `https://hikingapp.com/company/` liegt außerhalb des Geltungsbereichs Ihrer Web-App. Für URLs außerhalb des Geltungsbereichs können Browser unterschiedliche UI-Elemente anzeigen, um Benutzer darüber zu informieren, dass sie den definierten Geltungsbereich der App verlassen haben.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifestmitglied
- {{Glossary("Application_context", "Anwendungskontext")}}
