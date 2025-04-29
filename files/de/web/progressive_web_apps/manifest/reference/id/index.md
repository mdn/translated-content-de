---
title: id
slug: Web/Progressive_web_apps/Manifest/Reference/id
l10n:
  sourceCommit: eb7c37164c0bdce8b90077686bd5f8b01decce88
---

{{QuickLinksWithSubpages("/de/docs/Web/Progressive_web_apps/Manifest/Reference")}}

Das `id` Manifest-Element wird verwendet, um eine eindeutige Kennung für Ihre Webanwendung festzulegen.

## Syntax

```json-nolint
/* Absolute URL */
"id": "https://example.com/myapp"

/* Relative URL */
"id": "myapp/v2"

/* URL with query parameters */
"id": "myapp?version=2&mode=trial"
```

### Werte

- `id`
  - : Ein String, der die Form einer URL annimmt. Die URL muss die gleiche Herkunft wie die [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Ihrer Web-App haben. Wenn `id` eine relative URL ist, wird sie unter Verwendung der Herkunft von `start_url` aufgelöst. Jeder Fragmentteil in der `id` wird immer ignoriert. Wenn `id` nicht spezifiziert ist oder der Wert in irgendeiner Weise ungültig ist (wie z.B. kein String, keine gültige URL, nicht gleiche Herkunft wie `start_url`), wird der `start_url`-Wert verwendet.

## Beschreibung

Das `id` Manifest-Element dient als eindeutige Kennung für Ihre Web-App. Es ermöglicht Browsern, zwischen verschiedenen Anwendungen zu unterscheiden:

- Wenn ein Browser auf ein App-Manifest mit einer `id` stößt, die nicht einer bereits installierten Anwendung entspricht, behandelt er dieses Manifest als Beschreibung einer eigenständigen Anwendung, selbst wenn es von derselben URL wie eine andere Anwendung bereitgestellt wird.
- Wenn ein Browser auf ein App-Manifest mit einer `id` stößt, die mit der Identität einer bereits installierten App übereinstimmt, behandelt er das neue Manifest als Ersatz für das bestehende Manifest der App, auch wenn die App von einer anderen URL als der zuvor installierten bereitgestellt wird.

> [!NOTE]
> Obwohl das `id` wie eine URL verarbeitet wird, verweist es nicht auf eine Ressource, die aufgerufen werden kann, daher muss es nicht innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) der App liegen.

Die `id` kann auch von Diensten verwendet werden, die Listen von Web-Apps sammeln, um Anwendungen eindeutig zu identifizieren.

### Hinweise zur Verwendung

Einige wichtige Punkte, die Sie bei der Verwendung des `id`-Elements beachten sollten:

- Als empfohlene Praxis setzen Sie ein führendes `/` voran, um anzugeben, dass die `id` ein root-relativer URL-Pfad ist.
- Da `id` im Verhältnis zur Herkunft von `start_url` aufgelöst wird, führen `id`-Werte wie `../foo`, `foo`, `/foo` und `./foo` alle zur gleichen Kennung relativ zur Herkunft. Beispielsweise, wenn `start_url` `https://example.com/app/` ist, werden alle diese `id`-Werte zu `https://example.com/foo/` aufgelöst.
- Standardmäßige URL-Codierungs- und -Decodierungsregeln gelten, wenn der `id`-Wert aufgelöst wird.
- Fragmente in der `id` werden während der Verarbeitung entfernt. Beispielsweise, wenn `id` auf `foo#bar` gesetzt ist, wird es als `foo` aufgelöst. Ebenso, wenn `id` undefiniert ist und die `start_url` `https://example.com/app/#home` ist, wird `id` zu `https://example.com/app/` aufgelöst.
- Abfrageparameter in der `id` bleiben erhalten und werden in die endgültige aufgelöste Kennung eingeschlossen.

### Verständnis der `id`-Auflösung

Angenommen, die `start_url` Ihrer App ist `https://example.com/my-app/home`. Die folgende Tabelle zeigt, wie verschiedene `id`-Werte im Manifest aufgelöst werden:

| `id` im Manifest              | Aufgelöste `id`                    | Erklärung                                                                                                        |
| ----------------------------- | ---------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| undefiniert                   | `https://example.com/my-app/home`  | Standardmäßig auf `start_url`                                                                                    |
| `""`                          | `https://example.com/my-app/home`  | Leerer String wird zu `start_url`                                                                                |
| `/`                           | `https://example.com/`             | Root-relativer URL                                                                                               |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | Relativer Pfad, der im Verhältnis zur Herkunft von `start_url` aufgelöst wird, Abfrageparameter bleiben erhalten |
| `foo#heading`                 | `https://example.com/foo`          | Relativer Pfad, der im Verhältnis zur Herkunft von `start_url` aufgelöst wird, Fragment entfernt                 |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | Cross-Origin-URL nicht erlaubt, fällt zurück auf `start_url`                                                     |
| `😀`                          | `https://example.com/%F0%9F%98%80` | Nicht-ASCII-Zeichen in URL kodiert                                                                               |

## Beispiele

### Erstellen einer eigenständigen App-Version

Angenommen, Sie erstellen eine Web-App mit folgendem Manifest:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v1",
  "start_url": "https://example.com/app"
}
```

Wenn Sie später eine weitere Version dieser App mit signifikanten Änderungen erstellen und möchten, dass sie als andere App behandelt wird, können Sie das Manifest wie folgt hinzufügen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

In diesem Fall behandeln Browser das neue Manifest als Beschreibung einer eigenständigen Anwendung, selbst wenn beide Manifestdateien von derselben URL bereitgestellt werden, da die `id` unterschiedlich ist. Infolgedessen können Benutzer beide Versionen gleichzeitig installiert haben.

### Aktualisieren einer bestehenden App

Betrachten Sie ein Szenario, in dem Sie eine Web-App mit folgendem Manifest bereitstellen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://example.com/old-app"
}
```

Wenn Sie sich jedoch später entscheiden, die App in einen anderen Pfad zu verschieben, würden Sie das Manifest wie folgt aktualisieren:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://example.com/new-app"
}
```

In diesem Fall behandeln Browser das neue Manifest als Update der bestehenden App, da die `id`-Werte übereinstimmen. In diesem Fall erhalten Benutzer ein Update ihrer bestehenden App, anstatt aufgefordert zu werden, eine neue App zu installieren.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifest-Element
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifest-Element
