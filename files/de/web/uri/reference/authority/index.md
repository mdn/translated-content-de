---
title: URI-Authority
short-title: Authority
slug: Web/URI/Reference/Authority
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Die **Authority** eines URI ist der Abschnitt, der nach dem [Schema](/de/docs/Web/URI/Reference/Schemes) und vor dem Pfad kommt. Sie kann bis zu drei Teile umfassen: Benutzerinformationen, Host und Port.

## Syntax

```url
host
host:port
user@host
user@host:port
```

- `host`
  - : Der _Host_ ist in der Regel der Domainname oder die IP-Adresse des Servers, der die Ressource hostet. Der Domainname wird über das {{Glossary("DNS", "Domain Name System")}} in eine IP-Adresse aufgelöst.
- `port` {{optional_inline}}
  - : Der _Port_ ist eine Nummer, die den Port angibt, auf dem der Server auf Anfragen wartet. Er ist optional und hat für HTTP den Standardwert 80 und für HTTPS den Standardwert 443. Andere Schemas können ihre eigenen Standardwerte definieren oder ihn als obligatorisch festlegen.
- `user` {{optional_inline}}

  - : Der _Benutzer_ ist optional und wird zu Authentifizierungszwecken verwendet. Er wird in Web-URIs nicht häufig verwendet.

    > [!WARNING]
    > Es wird nicht empfohlen, Benutzerinformationen direkt in HTTP-URLs anzugeben, da dadurch sensible Informationen preisgegeben werden können. Verwenden Sie stattdessen andere Methoden wie HTTP-Authentifizierung oder Sitzungscookies. Manchmal täuschen Phishing-Seiten Benutzer, indem sie irreführende URLs anzeigen, deren "Benutzer"-Teil wie ein Domainname aussieht, bekannt als [semantischer URL-Angriff](https://en.wikipedia.org/wiki/Semantic_URL_attack).

## Beschreibung

Betrachten Sie die folgende URL:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

Die Authority in diesem Fall ist `www.example.com:80`, bestehend aus dem Hostnamen (genauer gesagt einem Domainnamen) und einem Port.

![Domainname](mdn-url-domain@x2.png)

`www.example.com` ist der _Hostname_ des URI und gibt an, welcher Webserver angefordert wird. Hier verwenden wir einen Domainnamen, es ist jedoch auch möglich, eine {{Glossary("IP_address", "IP-Adresse")}} des Hosts zu verwenden.
Da IP-Adressen weniger bequem und schwerer zu merken sind, wird häufiger ein Domainname verwendet, es sei denn, der Server hat keinen registriert.

![Port](mdn-url-port@x2.png)

`:80` ist der _Port_ der URL und gibt das technische "Tor" an, über das auf die Ressourcen des Webservers zugegriffen wird. Er wird normalerweise weggelassen, wenn der Webserver die Standardports des HTTP-Protokolls (80 für HTTP und 443 für HTTPS) verwendet, um den Zugang zu seinen Ressourcen zu gewähren. Andernfalls ist er obligatorisch.

## Beispiele

- `https://developer.mozilla.org`
  - : Der Host ist `developer.mozilla.org`. Der Port ist nicht angegeben, wird jedoch auf 443 standardmäßig gesetzt, wenn auf `https:` zugegriffen wird.
- `http://localhost:8080`
  - : Der Host ist `localhost` und der Port ist `8080`. `localhost` ist ein spezieller Hostname, den der Browser in die lokale Adresse `127.0.0.1` auflöst.
- `postgresql://postgres:admin123@db:5432`
  - : Der Host ist `db`, und der Port ist `5432`. Es wird auch ein Benutzer `postgres` und dessen Passwort `admin123` angegeben. Dies kann verwendet werden, um eine Verbindung zu einer PostgreSQL-Datenbank herzustellen.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Eine irreführende URL, die aussieht, als würde sie auf eine vertrauenswürdige Website verweisen. Der Hostname ist jedoch `10.0.0.1`, und der Teil `cnn.example.com&story=breaking_news` ist der "Benutzer".

## Spezifikationen

{{Specifications}}

## Siehe auch

- [URIs](/de/docs/Web/URI)
- [Entscheidung zwischen www und nicht-www URLs](/de/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
