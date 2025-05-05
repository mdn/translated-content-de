---
title: id
slug: Web/Progressive_web_apps/Manifest/Reference/id
l10n:
  sourceCommit: 628b29f53d15f203c4a6b33c1d0303f864f6af63
---

Das Manifestmitglied `id` wird verwendet, um eine eindeutige Kennung für Ihre Webanwendung anzugeben.

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
  - : Ein String, der die Form einer URL annimmt.
    Die URL muss denselben Ursprung wie die [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Ihrer Webanwendung haben.
    Wenn `id` eine relative URL ist, wird sie unter Verwendung des Ursprungs von `start_url` aufgelöst. Jegliches Fragment in der `id` wird immer ignoriert.
    Wenn `id` nicht angegeben wird oder der Wert in irgendeiner Weise ungültig ist (z. B. nicht ein String, keine gültige URL, nicht denselben Ursprung wie `start_url`), wird der Wert von `start_url` verwendet.

## Beschreibung

Das Manifestmitglied `id` dient als eindeutige Kennung für Ihre Webanwendung. Es erlaubt Browsern, zwischen verschiedenen Anwendungen zu unterscheiden:

- Wenn ein Browser auf ein App-Manifest mit einer `id` trifft, die nicht einer bereits installierten Anwendung entspricht, behandelt er dieses Manifest als Beschreibung einer eigenständigen Anwendung, selbst wenn es von derselben URL wie eine andere Anwendung bereitgestellt wird.
- Wenn ein Browser auf ein App-Manifest mit einer `id` trifft, die mit der Identität einer bereits installierten Anwendung übereinstimmt, behandelt er das neue Manifest als Ersatz für das bestehende Manifest der App, selbst wenn die App von einer anderen URL als der zuvor installierten bereitgestellt wird.

> [!NOTE]
> Während die `id` wie eine URL verarbeitet wird, zeigt sie nicht auf eine zugängliche Ressource, sodass sie nicht innerhalb des [scope](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) der App liegen muss.

Die `id` kann auch von Diensten verwendet werden, die Sammlungen von Web-Apps führen, um Anwendungen eindeutig zu identifizieren.

### Nutzungshinweise

Einige wichtige Punkte, die bei der Verwendung des `id` Mitglieds zu beachten sind:

- Es wird als empfohlene Praxis angesehen, ein führendes `/` zu verwenden, um anzugeben, dass `id` ein root-relativer URL-Pfad ist.
- Da `id` relativ zum Ursprung der `start_url` aufgelöst wird, führen `id` Werte wie `../foo`, `foo`, `/foo` und `./foo` alle zur gleichen Kennung relativ zum Ursprung. Zum Beispiel, wenn `start_url` `https://example.com/app/` ist, werden all diese `id` Werte zu `https://example.com/foo/` aufgelöst.
- Standardregeln zur URL-Codierung und -Decodierung gelten beim Auflösen des `id` Werts.
- Fragmente in der `id` werden während der Verarbeitung entfernt. Zum Beispiel, wenn `id` auf `foo#bar` gesetzt ist, wird sie als `foo` aufgelöst. Ebenso, wenn `id` nicht definiert ist und `start_url` `https://example.com/app/#home` ist, wird `id` zu `https://example.com/app/` aufgelöst.
- Abfrageparameter in der `id` werden beibehalten und in die endgültige aufgelöste Kennung eingeschlossen.

### Verständnis der `id` Auflösung

Angenommen, die `start_url` für Ihre App ist `https://example.com/my-app/home`. Die folgende Tabelle zeigt, wie verschiedene `id` Werte im Manifest aufgelöst werden:

| `id` im Manifest              | Aufgelöste `id`                    | Erklärung                                                                                        |
| ----------------------------- | ---------------------------------- | ------------------------------------------------------------------------------------------------ |
| undefiniert                   | `https://example.com/my-app/home`  | Standardmäßig als `start_url`                                                                    |
| `""`                          | `https://example.com/my-app/home`  | Leerer String wird als `start_url` aufgelöst                                                     |
| `/`                           | `https://example.com/`             | Root-relative URL                                                                                |
| `foo?x=y`                     | `https://example.com/foo?x=y`      | Relativer Pfad, aufgelöst gegen den Ursprung der `start_url` mit beibehaltenen Abfrageparametern |
| `foo#heading`                 | `https://example.com/foo`          | Relativer Pfad, aufgelöst gegen den Ursprung der `start_url` mit entferntem Fragment             |
| `https://anothersite.com/foo` | `https://example.com/my-app/home`  | Fremdursprungs-URL nicht erlaubt, fällt auf `start_url` zurück                                   |
| `😀`                          | `https://example.com/%F0%9F%98%80` | Nicht-ASCII-Zeichen in URL codiert                                                               |

## Beispiele

### Erstellung einer eigenständigen App-Version

Angenommen, Sie erstellen eine Webanwendung mit folgendem Manifest:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v1",
  "start_url": "https://example.com/app"
}
```

Wenn Sie später eine andere Version dieser App mit erheblichen Änderungen erstellen und möchten, dass sie als eine andere App behandelt wird, können Sie das Manifest wie folgt hinzufügen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/v2",
  "start_url": "https://example.com/app"
}
```

In diesem Fall werden die neuen Manifestdateien von den Browsern als Beschreibung einer eigenständigen Anwendung behandelt, da die `id`s unterschiedlich sind. Dadurch können Benutzer beide Versionen gleichzeitig installiert haben.

### Aktualisierung einer bestehenden App

Betrachten Sie ein Szenario, in dem Sie eine Webanwendung mit folgendem Manifest bereitstellen:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://example.com/old-app"
}
```

Entscheiden Sie sich später, die App auf einen anderen Pfad zu verschieben, aktualisieren Sie das Manifest wie folgt:

```json
{
  "name": "My Weather Application",
  "id": "https://example.com/weatherapp/",
  "start_url": "https://example.com/new-app"
}
```

Browser werden dieses neue Manifest als Aktualisierung der bestehenden App behandeln, da die `id` Werte übereinstimmen. In diesem Fall erhalten Benutzer ein Update ihrer bestehenden App, anstatt zur Installation einer neuen App aufgefordert zu werden.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`scope`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/scope) Manifestmitglied
- [`start_url`](/de/docs/Web/Progressive_web_apps/Manifest/Reference/start_url) Manifestmitglied
