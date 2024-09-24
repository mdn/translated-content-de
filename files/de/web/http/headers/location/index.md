---
title: Standort
slug: Web/HTTP/Headers/Location
l10n:
  sourceCommit: 0880a90f3811475d78bc4b2c344eb4146f25f66c
---

{{HTTPSidebar}}

Der **`Location`** Antwort-Header gibt die URL an, zu der eine Seite umgeleitet werden soll. Er hat nur eine Bedeutung, wenn er mit einer `3xx` (Umleitung) oder `201` (erstellt) Statusantwort bereitgestellt wird.

Bei der Umleitung hängt die HTTP-Methode, die verwendet wird, um die neue Anfrage zur Abrufung der durch `Location` angegebenen Seite zu machen, von der ursprünglichen Methode und der Art der Umleitung ab:

- {{HTTPStatus("303")}} (See Other) Antworten führen immer zur Verwendung der {{HTTPMethod("GET")}} Methode.
- {{HTTPStatus("307")}} (Temporary Redirect) und {{HTTPStatus("308")}} (Permanent Redirect) ändern nicht die Methode, die in der ursprünglichen Anfrage verwendet wurde.
- {{HTTPStatus("301")}} (Moved Permanently) und {{HTTPStatus("302")}} (Found) ändern die Methode meistens nicht, obwohl ältere User-Agents dies möglicherweise tun (also man weiß es im Grunde nicht).

Alle Antworten mit einem dieser Statuscodes senden einen `Location` Header.

Bei der Ressourcenerstellung zeigt er die URL der neu erstellten Ressource an.

`Location` und {{HTTPHeader("Content-Location")}} sind unterschiedlich. `Location` gibt das Ziel einer Umleitung oder die URL einer neu erstellten Ressource an. {{HTTPHeader("Content-Location")}} gibt die direkte URL an, die verwendet werden soll, um auf die Ressource zuzugreifen, wenn [Inhaltsaushandlung](/de/docs/Web/HTTP/Content_negotiation) durchgeführt wurde, ohne dass eine weitere Inhaltsaushandlung erforderlich ist. `Location` ist ein Header, der mit der Antwort verbunden ist, während {{HTTPHeader("Content-Location")}} mit der zurückgegebenen Entität verbunden ist.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header-Typ</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>nein</td>
    </tr>
  </tbody>
</table>

## Syntax

```http
Location: <url>
```

## Direktiven

- \<url>
  - : Eine relative (zur Anforderungs-URL) oder absolute URL.

## Beispiele

```http
Location: /index.html
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{HTTPHeader("Content-Location")}}
- Status von Antworten, die einen `Location` Header enthalten: {{HTTPStatus("201")}}, {{HTTPStatus("301")}}, {{HTTPStatus("302")}}, {{HTTPStatus("303")}}, {{HTTPStatus("307")}}, {{HTTPStatus("308")}}.
