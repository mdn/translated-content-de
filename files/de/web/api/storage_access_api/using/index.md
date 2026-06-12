---
title: Verwendung der Storage Access API
slug: Web/API/Storage_Access_API/Using
l10n:
  sourceCommit: 793bcbe2dd88fc553d2c4c918c4dec4899704022
---

{{DefaultAPISidebar("Storage Access API")}}

Die [Storage Access API](/de/docs/Web/API/Storage_Access_API) kann von eingebetteten cross-site Dokumenten verwendet werden, um zu überprüfen, ob sie Zugriff auf [Third-party Cookies](/de/docs/Web/Privacy/Guides/Third-party_cookies) und [unpartitionierten Zustand](/de/docs/Web/Privacy/Guides/State_Partitioning#state_partitioning) haben und, falls nicht, um Zugriff zu bitten. Wir werden kurz ein häufiges Szenario des Speicherzugriffs betrachten.

> [!NOTE]
> Wenn wir im Zusammenhang mit der Storage Access API über Third-party Cookies sprechen, meinen wir implizit [_unpartitionierte_](/de/docs/Web/API/Storage_Access_API#unpartitioned_versus_partitioned_cookies) Third-party Cookies.

## Nutzungshinweise

Die Storage Access API wurde entwickelt, um eingebetteten Inhalten zu ermöglichen, Zugriff auf Third-party Cookies und unpartitionierten Zustand anzufordern — die meisten modernen Browser blockieren standardmäßig solchen Zugriff, um die Privatsphäre der Nutzer zu schützen. Da eingebettete Inhalte nicht wissen, wie sich ein Browser in dieser Hinsicht verhalten wird, ist es am besten, stets zu überprüfen, ob das eingebettete {{htmlelement("iframe")}} Speicherkapazität hat, bevor versucht wird, ein Cookie zu lesen oder zu schreiben. Dies gilt insbesondere für den Zugriff auf [`Document.cookie`](/de/docs/Web/API/Document/cookie), da Browser oft ein leeres Cookie-Glas zurückgeben, wenn der Zugriff auf Third-party Cookies blockiert wird.

Im folgenden Beispiel zeigen wir, wie ein eingebettetes cross-site {{htmlelement("iframe")}} auf Third-party Cookies und unpartitionierten Zustand zugreifen kann, unter einer Browser-Speicherzugriffspolitik, die den Zugriff ansonsten blockieren würde.

## Zulassen eines sandboxed \<iframe> zur Nutzung der API

Zunächst einmal muss, wenn das `<iframe>` sandboxed ist, die einbettende Website das `allow-storage-access-by-user-activation` [Sandbox-Token](/de/docs/Web/HTML/Reference/Elements/iframe#sandbox) hinzufügen, um Storage Access API-Anfragen erfolgreich zu machen, zusammen mit `allow-scripts` und `allow-same-origin`, um zu ermöglichen, dass ein Skript ausgeführt wird, um die API aufzurufen, und es in einem Ursprung ausgeführt wird, der Cookies und Zustand haben kann:

```html
<iframe
  sandbox="allow-storage-access-by-user-activation
                 allow-scripts
                 allow-same-origin">
  …
</iframe>
```

## Überprüfen und Anfordern des Speicherzugriffs

Nun zum Code, der innerhalb des eingebetteten Dokuments ausgeführt wird. In diesem Code:

1. Zuerst verwenden wir Feature-Erkennung (`if (document.hasStorageAccess) {}`), um zu überprüfen, ob die API unterstützt wird. Falls nicht, führen wir unseren Code, der auf Cookies zugreift, trotzdem aus und hoffen, dass er funktioniert. Er sollte in jedem Fall defensiv kodiert werden, um mit solchen Eventualitäten umzugehen.
2. Wenn die API unterstützt wird, rufen wir `document.hasStorageAccess()` auf.
3. Wenn dieser Aufruf `true` zurückgibt, bedeutet das, dass dieses {{htmlelement("iframe")}} bereits Zugriff erhalten hat, und wir können unseren Code, der auf Cookies und Zustand zugreift, sofort ausführen.
4. Wenn dieser Aufruf `false` zurückgibt, rufen wir dann [`Permissions.query()`](/de/docs/Web/API/Permissions/query) auf, um zu überprüfen, ob die Erlaubnis zum Zugriff auf Third-party Cookies und unpartitionierten Zustand bereits erteilt wurde (d.h. zu einem anderen Same-site-Embedding). Wir umschließen diesen gesamten Abschnitt mit einem [`try...catch`](/de/docs/Web/JavaScript/Reference/Statements/try...catch) Block, da [einige Browser die `"storage-access"` Berechtigung nicht unterstützen](/de/docs/Web/API/Storage_Access_API#api.permissions.permission_storage-access), was den Aufruf von `query()` zum Werfen bringen kann. Wenn er wirft, geben wir das an die Konsole aus und versuchen den Cookie-Code trotzdem auszuführen.
5. Wenn der Berechtigungszustand `"granted"` ist, rufen wir sofort `document.requestStorageAccess()` auf. Dieser Aufruf wird automatisch aufgelöst, was dem Benutzer etwas Zeit spart, dann können wir unseren Code, der auf Cookies und Zustand zugreift, ausführen.
6. Wenn der Berechtigungszustand `"prompt"` ist, rufen wir `document.requestStorageAccess()` nach einer Benutzerinteraktion auf. Dieser Aufruf kann eine Eingabeaufforderung beim Benutzer auslösen. Wenn dieser Aufruf aufgelöst wird, können wir unseren Code, der auf Cookies und Zustand zugreift, ausführen.
7. Wenn der Berechtigungszustand `"denied"` ist, hat der Benutzer unsere Anfragen zum Zugriff auf Third-party Cookies oder unpartitionierten Zustand abgelehnt und unser Code kann sie nicht nutzen.

```js
function doThingsWithCookies() {
  document.cookie = "foo=bar"; // set a cookie
}

function doThingsWithLocalStorage(handle) {
  handle.localStorage.setItem("foo", "bar"); // set a local storage key
}

async function handleCookieAccess() {
  if (!document.hasStorageAccess) {
    // This browser doesn't support the Storage Access API
    // so let's just hope we have access!
    doThingsWithCookies();
  } else {
    const hasAccess = await document.hasStorageAccess();
    if (hasAccess) {
      // We have access to third-party cookies, so let's go
      doThingsWithCookies();
      // If we want to modify unpartitioned state, we need to request a handle.
      const handle = await document.requestStorageAccess({
        localStorage: true,
      });
      doThingsWithLocalStorage(handle);
    } else {
      // Check whether third-party cookie access has been granted
      // to another same-site embed
      try {
        const permission = await navigator.permissions.query({
          name: "storage-access",
        });

        if (permission.state === "granted") {
          // If so, you can just call requestStorageAccess() without a user interaction,
          // and it will resolve automatically.
          const handle = await document.requestStorageAccess({
            cookies: true,
            localStorage: true,
          });
          doThingsWithLocalStorage(handle);
          doThingsWithCookies();
        } else if (permission.state === "prompt") {
          // Need to call requestStorageAccess() after a user interaction
          btn.addEventListener("click", async () => {
            try {
              const handle = await document.requestStorageAccess({
                cookies: true,
                localStorage: true,
              });
              doThingsWithLocalStorage(handle);
              doThingsWithCookies();
            } catch (err) {
              // If there is an error obtaining storage access.
              console.error(`Error obtaining storage access: ${err}.
                            Please sign in.`);
            }
          });
        } else if (permission.state === "denied") {
          // User has denied third-party cookie access, so we'll
          // need to do something else
        }
      } catch (error) {
        console.log(`Could not access permission state. Error: ${error}`);
        doThingsWithCookies(); // Again, we'll have to hope we have access!
      }
    }
  }
}
```

> [!NOTE]
> `requestStorageAccess()` Anfragen werden automatisch abgelehnt, es sei denn, der eingebettete Inhalt verarbeitet derzeit eine Benutzeraktion wie Tippen oder Klicken ({{Glossary("transient_activation", "transiente Aktivierung")}}), oder wenn die Berechtigung bereits zuvor erteilt wurde. Wenn die Berechtigung nicht zuvor erteilt wurde, müssen `requestStorageAccess()`-Anfragen innerhalb eines benutzergesteuerten Ereignishandlers ausgeführt werden, wie oben gezeigt.

### Verwandte Website-Sets

Das Chrome-only [Verwandte Website-Sets](https://privacysandbox.google.com/cookies/related-website-sets-integration) Feature kann als progressiver Verbesserungsmechanismus betrachtet werden, der zusammen mit der Storage Access API funktioniert — unterstützende Browser gewähren standardmäßig Third-party Cookie- und unpartitionierten Zustand-Zugriff zwischen Websites im selben Set. Das bedeutet, dass der übliche Workflow der Benutzergenehmigungsaufforderung, der oben beschrieben ist, nicht durchlaufen werden muss, was eine benutzerfreundlichere Erfahrung für die Benutzer der Websites im Set ergibt.

## Anfordern des Speicherzugriffs von der obersten Website im Namen eingebetteter Ressourcen

Die oben genannten Funktionen der Storage Access API ermöglichen es einem eingebetteten Dokument, seinen eigenen Third-party Cookie-Zugriff anzufordern. Es gibt eine zusätzliche experimentelle Methode, [`Document.requestStorageAccessFor()`](/de/docs/Web/API/Document/requestStorageAccessFor), eine vorgeschlagene Erweiterung der Storage Access API, die es obersten Websites ermöglicht, Speicherzugriff im Namen spezifischer verwandter Ursprünge anzufordern.

Die Methode `requestStorageAccessFor()` spricht Herausforderungen bei der Einführung der Storage Access API auf obersten Websites an, die cross-site Bilder oder Skripte verwenden, die Cookies erfordern. Sie kann den Zugriff auf Third-party Cookies für cross-site Ressourcen, die direkt in die obere Website eingebettet sind und nicht in der Lage sind, ihren eigenen Speicherzugriff anzufordern, ermöglichen, zum Beispiel über {{htmlelement("img")}} oder {{htmlelement("script")}} Elemente.

Damit `requestStorageAccessFor()` funktioniert, müssen sowohl die aufrufende oberste Seite als auch die eingebettete Ressource, für die der Speicherzugriff angefordert wird, Teil desselben [verwandten Website-Sets](#verwandte_website-sets) sein.

Die typische Nutzung von `requestStorageAccessFor()` sieht folgendermaßen aus (diesmal im regulären Promise-Stil statt async/await geschrieben):

```js
navigator.permissions
  .query({
    name: "top-level-storage-access",
    requestedOrigin: "https://example.com",
  })
  .then((permission) => {
    if (permission.state === "granted") {
      // Permission has already been granted
      // No need to call requestStorageAccessFor() again, just start using cookies
      doThingsWithCookies();
    } else if (permission.state === "prompt") {
      // Need to call requestStorageAccessFor() after a user interaction
      btn.addEventListener("click", () => {
        // Request storage access
        rSAFor();
      });
    } else if (permission.state === "denied") {
      // User has denied third-party cookie access, so we'll
      // need to do something else
    }
  });

function rSAFor() {
  if ("requestStorageAccessFor" in document) {
    document.requestStorageAccessFor("https://example.com").then(
      (res) => {
        doThingsWithCookies();
      },
      (err) => {
        // Handle errors
      },
    );
  }
}
```

> [!NOTE]
> Im Gegensatz zu `requestStorageAccess()` überprüft Chrome nicht, ob es eine Interaktion in einem obersten Dokument innerhalb der letzten 30 Tage gab, wenn `requestStorageAccessFor()` aufgerufen wird, da sich der Benutzer bereits auf der Seite befindet. Siehe [Browser-spezifische Variationen > Chrome](/de/docs/Web/API/Storage_Access_API#chrome) für weitere Details zu diesem Verhalten.

Beim Abfragen des Berechtigungsstatus für Speicherzugriffsanfragen, die im Namen eines anderen Ursprungs gestellt werden, wird ein anderer Berechtigungsname als beim Rest der Storage Access API verwendet: `"top-level-storage-access"` statt `"storage-access"`. Im obigen Code verwenden wir den folgenden Aufruf:

```js
navigator.permissions.query({
  name: "top-level-storage-access",
  requestedOrigin: "https://example.com",
});
```

um herauszufinden, ob dem Ursprung zuvor die Berechtigung erteilt wurde oder ob der Cookie-Zugriff noch angefordert werden muss.

- Wenn der Berechtigungsstatus `"granted"` ist, können wir mit der Nutzung von Cookies beginnen; `requestStorageAccessFor()` wurde bereits aufgerufen, also besteht keine Notwendigkeit, es noch einmal aufzurufen.
- Wenn der Berechtigungsstatus `"prompt"` ist, müssen wir `document.requestStorageAccessFor("https://example.com")` innerhalb einer Benutzeraktion, wie einem Klick auf einen Button, aufrufen.

Nachdem die Berechtigung `"top-level-storage-access"` erteilt wurde, schließen cross-site Anfragen Cookies ein, wenn sie [CORS](/de/docs/Web/HTTP/Guides/CORS) / [`crossorigin`](/de/docs/Web/HTML/Reference/Attributes/crossorigin) einbeziehen, daher möchten Websites vielleicht warten, bevor sie eine Anfrage auslösen. Solche Anfragen müssen die Option [`credentials: "include"`](/de/docs/Web/API/RequestInit#credentials) verwenden und Ressourcen müssen das Attribut `crossorigin="use-credentials"` enthalten.

Zum Beispiel:

```js
function checkCookie() {
  fetch("https://example.com/getcookies.json", {
    method: "GET",
    credentials: "include",
  })
    .then((response) => response.json())
    .then((json) => {
      // Do something
    });
}
```
