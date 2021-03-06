import { IconButton, Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import {
  Box,
  Grid,
  ListItem,
  OrderedList,
  Center,
  Text,
  Flex,
  VStack,
  List,
} from "@chakra-ui/layout";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";
import Head from "next/head";
import React from "react";
import NextLink from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  UnorderedList,
  Heading,
  ListIcon,
} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

export default function Servicios() {
  return (
    <>
      <Head>
        <title>Reciclaje de la Costa - Servicios</title>
        <link rel="icon" href="/favicon.png" />
        <meta name="robots" content="index, follow" />
        <meta
          name="description"
          content="Servicios de reciclaje ofrecidos en Manzanillo, Colima"
        ></meta>
        <meta
          name="keywords"
          content="reciclar,servicio,reciclaje,residuos,basura,manzanillo,colima"
        ></meta>
      </Head>
      <Flex flexDir="column" w="100%" h="auto" bgColor="white" align="center">
        {/* Banner */}
        <Flex
          flexDir={["column", "column", "row", "row"]}
          w="100%"
          h={["80vh", "80vh", "80vh", "78vh"]}
          bgColor="white"
          p="15px"
          bgImage="url('/assets/banner_servicios.jpg')"
          bgPosition="center"
          bgRepeat="no-repeat"
          bgSize="cover"
        >
          <VStack
            w={["100%", "100%", "100%", "100%"]}
            h={["80%", "100%", "100%", "100%"]}
            spacing={4}
            justifyContent={["flex-end", "flex-end", "center", "center"]}
            pb="30px"
          >
            <Heading
              fontSize={["4xl", "5xl", "5xl", "5xl"]}
              color="white"
              align="center"
              fontWeight="extrabold"
              w={["90%", "50%", "50%", "50%"]}
            >
              CONOCE TODO LO QUE TENEMOS PARA TI
            </Heading>
            <IconButton
              aria-label="bajar"
              alignSelf="center"
              bgColor="transparent"
              color="white"
              borderColor="green.400"
              icon={<IoIosArrowDown />}
              fontSize="5xl"
              _hover={{ color: "black" }}
              onClick={() =>
                document
                  .getElementById("descripcion")
                  .scrollIntoView({ behavior: "smooth" })
              }
            />
          </VStack>
        </Flex>
        {/* Descripcion de servicios */}
        <Flex
          flexDir="column"
          w="100%"
          h="auto"
          id="descripcion"
          p="20px 5%"
          pt="100px"
        >
          <Text
            fontSize={["3xl", "3xl", "4xl", "4xl"]}
            color="green.400"
            fontWeight="bold"
          >
            SERVICIOS QUE OFRECEMOS
          </Text>
          <Text h="auto" fontSize="md" align="left">
            Enfocados en cuidar del medio ambiente, logramos reciclar miles de
            toneladas de materiales al a??o, d??ndoles una segunda vida y
            disminuyendo la cantidad de residuos depositados en el relleno
            sanitario.
          </Text>
          <Grid
            w="100%"
            h="auto"
            gridTemplateColumns={["1fr", "1fr", "1fr 1fr 1fr", "1fr 1fr 1fr"]}
            gridTemplateRows="auto"
            pt="20px"
            gap="30px"
          >
            <VStack
              w="100%"
              h="auto"
              spacing={6}
              shadow="2xl"
              p="20px"
              borderRadius="xl"
            >
              <Center w="100%" h="200px" overflow="hidden">
                <Image
                  w="100%"
                  h="full"
                  src="/assets/materialReciclable.jpg"
                  transition="transform .5s ease"
                  _hover={{ transform: "scale(1.5)" }}
                />
              </Center>
              <Text fontSize="lg" align="left" fontWeight="bold">
                RECOLECCI??N DE MATERIALES RECICLABLES
              </Text>
              <Text h="auto" fontSize="md" align="left">
                Puedes llevar tus materiales reciclables directamente a nuestras
                instalaciones o solicitar una recolecci??n y enviamos un veh??culo
                a tu domicilio. <br />
                <br />
                Los materiales pueden ser:
              </Text>
              <UnorderedList pl="5px" w="100%" align="left">
                <ListItem>PET</ListItem>
                <ListItem>Cart??n</ListItem>
                <ListItem>Papel</ListItem>
                <ListItem>Nylon</ListItem>
                <ListItem>Pl??stico duro</ListItem>
                <ListItem>Tapas</ListItem>
                <ListItem>Vidrio</ListItem>
                <ListItem>Chatarra</ListItem>
                <ListItem>Cobre</ListItem>
                <ListItem>Bronce</ListItem>
                <ListItem>Aluminio (latas)</ListItem>
                <ListItem>Aluminio (perfil)</ListItem>
              </UnorderedList>
              <Text h="auto" fontSize="md" align="left">
                Llama para agendar tu recolecci??n y saber m??s sobre este
                servicio. Ofrecemos precios competitivos. Recolectamos chatarra
                industrial.
              </Text>
            </VStack>
            <VStack
              w="100%"
              h="auto"
              spacing={6}
              shadow="2xl"
              p="20px"
              borderRadius="xl"
            >
              <Center w="100%" h="200px" overflow="hidden">
                <Image
                  w="100%"
                  h="full"
                  src="/assets/basuraHogar.jpg"
                  transition="transform .5s ease"
                  _hover={{ transform: "scale(1.5)" }}
                />
              </Center>
              <Text fontSize="lg" align="left" fontWeight="bold">
                GESTI??N DE RESIDUOS S??LIDOS URBANOS
              </Text>
              <Text h="auto" fontSize="md" align="left">
                Si eres un fraccionamiento o un peque??o establecimiento este
                servicio es ideal para ti. Realizamos la recolecci??n de:
              </Text>
              <UnorderedList pl="5px" w="100%" align="left">
                <ListItem>
                  Residuos generados en las casas habitaci??n, de materiales que
                  se utilizan en sus actividades dom??sticas, de los productos
                  que consumen y de sus envases, embalajes o empaques.
                </ListItem>
                <br />
                <ListItem>
                  Los residuos con caracter??sticas domiciliarias que provienen
                  de cualquier otra actividad dentro de establecimientos.
                </ListItem>
                <br />
                <ListItem>
                  Residuos resultantes de la limpieza de las v??as y lugares
                  p??blicos.
                </ListItem>
              </UnorderedList>
              <Text h="auto" fontSize="md" align="left">
                Gestionamos de forma segura la disposici??n final de tus residuos
                en vertederos autorizados.
              </Text>
            </VStack>
            <VStack
              w="100%"
              h="auto"
              spacing={6}
              shadow="2xl"
              p="20px"
              borderRadius="xl"
            >
              <Center w="100%" h="200px" overflow="hidden">
                <Image
                  w="100%"
                  h="full"
                  src="/assets/residuosGrandes.jpg"
                  transition="transform .5s ease"
                  _hover={{ transform: "scale(1.5)" }}
                />
              </Center>
              <Text fontSize="lg" align="left" fontWeight="bold">
                GESTI??N DE RESIDUOS DE MANEJO ESPECIAL
              </Text>
              <Text h="auto" fontSize="md" align="left">
                Si eres un gran generador de residuos s??lidos urbanos debido a
                tus procesos productivos, este servicio es ideal para ti.
              </Text>
              <UnorderedList pl="5px" w="100%" align="left">
                <ListItem>
                  Residuos de tiendas departamentales o centros comerciales
                  generados en grandes vol??menes.
                </ListItem>
                <br />
                <ListItem>
                  Residuos de la construcci??n, mantenimiento y demolici??n en
                  general.
                </ListItem>
                <br />
                <ListItem>Desechos de llantas y maderas.</ListItem>
                <br />
                <ListItem>
                  Residuos de los servicios de transporte, as?? como los
                  generados en puertos, aeropuertos, terminales ferroviarias y
                  portuarias y en las aduanas.
                </ListItem>
              </UnorderedList>
              <Text h="auto" fontSize="md" align="left">
                Contamos con unidades de transporte listas para todo tipo de
                desecho.
              </Text>
            </VStack>
            <VStack
              w="100%"
              h="auto"
              spacing={6}
              shadow="2xl"
              p="20px"
              borderRadius="xl"
            >
              <Center w="100%" h="200px" overflow="hidden">
                <Image
                  w="100%"
                  h="full"
                  src="/assets/papelOficina.jpg"
                  transition="transform .5s ease"
                  _hover={{ transform: "scale(1.5)" }}
                />
              </Center>
              <Text fontSize="lg" align="left" fontWeight="bold">
                DESTRUCCI??N DE PAPELER??A FISCAL
              </Text>
              <Text h="auto" fontSize="md" align="left">
                En este servicio ofrecemos la destrucci??n segura de tus archivos
                confidenciales. Nos encargamos de la recolecci??n, resguardo y
                destrucci??n de archivo muerto. <br />
                <br />
                Emitimos una carta responsiva por el manejo de informaci??n
                confidencial y una constancia de destrucci??n.
                <br />
                <br />
                Destruye tu archivo muerto de forma segura y cuida el medio
                ambiente.
              </Text>
            </VStack>
            <VStack
              w="100%"
              h="auto"
              spacing={6}
              shadow="2xl"
              p="20px"
              borderRadius="xl"
            >
              <Center w="100%" h="200px" overflow="hidden">
                <Image
                  w="100%"
                  h="full"
                  src="/assets/contenedor.jpg"
                  transition="transform .5s ease"
                  _hover={{ transform: "scale(1.5)" }}
                />
              </Center>
              <Text fontSize="lg" align="left" fontWeight="bold" w="100%">
                RENTA DE CONTENEDORES
              </Text>
              <Text h="auto" fontSize="md" align="left">
                Tenemos disponible la renta de contenedores de 1, 3, 6, 15, 20 y
                30 metros c??bicos para el almacenamiento seguro de tus residuos.
                <br />
                <br />
                Llama para saber m??s sobre este servicio y consultar
                disponibilidad.
              </Text>
            </VStack>
            <VStack
              w="100%"
              h="auto"
              spacing={6}
              shadow="2xl"
              p="20px"
              borderRadius="xl"
            >
              <Center w="100%" h="200px" overflow="hidden">
                <Image
                  w="100%"
                  h="full"
                  src="/assets/programas.jpg"
                  transition="transform .5s ease"
                  _hover={{ transform: "scale(1.5)" }}
                />
              </Center>
              <Text fontSize="lg" align="left" fontWeight="bold">
                APOYO EN PROGRAMAS DE RECICLADO
              </Text>
              <Text h="auto" fontSize="md" align="left">
                Unimos esfuerzos para limpiar ??reas naturales como playas, r??os,
                ??reas urbanas y salvaguardar su equilibrio ecol??gico. <br />
                <br />
                Si tienes alg??n programa de reciclaje o de recolecci??n de basura
                que deseas llevar a cabo no dudes en contactarnos.
              </Text>
            </VStack>
          </Grid>
          <NextLink href="/contacto" passHref>
            <Button
              as="a"
              size="xl"
              colorScheme="green"
              color="white"
              bgColor="green.400"
              variant="solid"
              p="30px"
              m={["20px 0px", "20px 0px", "40px", "40px"]}
              fontSize={["16px", "20px", "20px", "20px"]}
              textAlign="center"
            >
              CONT??CTANOS PARA PROGRAMAR <br />
              TU RECOLECCI??N
            </Button>
          </NextLink>
          <Text fontSize="2xl" align="left" fontWeight="bold" pb="10px">
            Est??s con los expertos
          </Text>
          <List fontSize="xl" pl="5px" w="100%" align="left">
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.400" />
              M??s de 10 a??os de experiencia en reciclaje y recolecci??n de
              residuos nos respaldan.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.400" />
              Registro ante IMADES.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.400" />
              Precios competitivos de compra y venta de materiales reciclables.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.400" />
              B??scula industrial calibrada, verificada y certificada.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.400" />
              Infraestructura de reciclaje, bandas de separaci??n y
              clasificaci??n, compactadoras y prensas.
            </ListItem>
            <ListItem>
              <ListIcon as={MdCheckCircle} color="green.400" />
              Infraestructura de transporte con unidades tipo Roll Off, cajas
              cerradas de 48 pies, volteos de 14m3, pipas de 10 y 20 mil litros,
              planas de 40 pies, camionetas de 3.5 toneladas y gr??a de 9
              toneladas.
            </ListItem>
          </List>
        </Flex>
        {/* Preguntas frecuentes */}
        <Flex w="80%" flexDir="column" p="50px 0px">
          <Text
            color="white"
            fontSize="3xl"
            pb="20px"
            w="100%"
            bgColor="green.400"
            borderRadius="10px"
          >
            Preguntas frecuentes:
          </Text>
          <Text fontSize="xl" pb="20px">
            En esta secci??n responderemos a algunas de tus preguntas. En caso de
            no encontrar respuesta a tus cuestiones, por favor, m??ndanos una
            consulta desde el formulario.
          </Text>
          <Accordion allowMultiple>
            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ??Qu?? es un residuo s??lido urbano (RSU)?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Los generados en las casas habitaci??n, que resultan de la
                    eliminaci??n de los materiales que utilizan en sus
                    actividades dom??sticas, de los productos que consumen y de
                    sus envases, embalajes o empaques; los residuos que
                    provienen de cualquier otra actividad dentro de
                    establecimientos o en la v??a p??blica que genere residuos con
                    caracter??sticas domiciliarias, y los resultantes de la
                    limpieza de las v??as y lugares p??blicos, siempre que no sean
                    considerados por esta Ley como residuos de otra ??ndole (DOF,
                    2003).
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ??Que es un residuo de manejo especial (RME)?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Son aquellos generados en los procesos productivos, que no
                    re??nen las caracter??sticas para ser considerados como
                    peligrosos o como residuos s??lidos urbanos, o que son
                    producidos por grandes generadores de residuos s??lidos
                    urbanos (DOF, 2003).
                    <OrderedList spacing={4}>
                      <ListItem>
                        Los residuos de las rocas o los productos de su
                        descomposici??n que s??lo puedan utilizarse para la
                        fabricaci??n de materiales de construcci??n o se destinen
                        para este fin, as?? como los productos derivados.
                      </ListItem>
                      <ListItem>
                        Los de servicios de salud, generados por los
                        establecimientos que realicen actividades
                        m??dico-asistenciales a las poblaciones humanas o
                        animales, centros de investigaci??n, con excepci??n de los
                        biol??gico-infecciosos.
                      </ListItem>
                      <ListItem>
                        Residuos generados por las actividades pesqueras,
                        agr??colas, silv??colas, forestales, av??colas, ganaderas,
                        incluyendo los residuos de los insumos utilizados en
                        esas actividades.
                      </ListItem>
                      <ListItem>
                        Residuos de los servicios de transporte, as?? como los
                        generados a consecuencia de las actividades que se
                        realizan en puertos, aeropuertos, terminales
                        ferroviarias y portuarias y en las aduanas.
                      </ListItem>
                      <ListItem>
                        Lodos provenientes del tratamiento de aguas residuales.
                      </ListItem>
                      <ListItem>
                        Residuos de tiendas departamentales o centros
                        comerciales generados en grandes vol??menes.
                      </ListItem>
                      <ListItem>
                        Residuos de la construcci??n, mantenimiento y demolici??n
                        en general.
                      </ListItem>
                      <ListItem>
                        Residuos tecnol??gicos provenientes de las industrias de
                        la inform??tica, fabricantes de productos electr??nicos o
                        de veh??culos automotores y otros que al transcurrir su
                        vida ??til, por sus caracter??sticas, requieren de un
                        manejo espec??fico.
                      </ListItem>
                    </OrderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ??Qu?? es un residuo peligroso?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Residuos que posean alguna de las caracter??sticas de
                    corrosividad, reactividad, explosividad, toxicidad,
                    inflamabilidad, o que contengan agentes infecciosos que les
                    confieran peligrosidad, as?? como envases, recipientes,
                    embalajes y suelos que hayan sido contaminados cuando se
                    transfieran a otro sitio (DOF, 2003).
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ??Qu?? obligaciones tengo si genero residuos?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    Los poseedores de residuos estar??n obligados, siempre que no
                    procedan a gestionarlos por s?? mismos, a entregarlos a un
                    gestor de residuos, para su valorizaci??n o eliminaci??n, o a
                    participar en un acuerdo voluntario o convenio de
                    colaboraci??n que comprenda estas operaciones.
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>

            <AccordionItem>
              {({ isExpanded }) => (
                <>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        ??Qu?? se considera una infracci??n grave en la gesti??n de
                        residuos?
                      </Box>
                      {isExpanded ? (
                        <MinusIcon fontSize="12px" />
                      ) : (
                        <AddIcon fontSize="12px" />
                      )}
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <OrderedList spacing={4}>
                      <ListItem>
                        El abandono, vertido o eliminaci??n incontrolados de
                        residuos peligrosos.
                      </ListItem>
                      <ListItem>
                        El abandono, vertido o eliminaci??n incontrolada de
                        cualquier otro tipo de residuos, siempre que se haya
                        producido un da??o o deterioro grave para el medio
                        ambiente o se haya puesto en peligro grave la salud de
                        las personas.
                      </ListItem>
                      <ListItem>
                        La elaboraci??n, importaci??n o adquisici??n
                        intracomunitaria de productos con sustancias o
                        preparados prohibidos por la peligrosidad de los
                        residuos que generan.
                      </ListItem>
                      <ListItem>
                        La no realizaci??n de las operaciones de limpieza y
                        recuperaci??n cuando un suelo haya sido declarado como
                        contaminado, tras el correspondiente requerimiento de la
                        Comunidad Aut??noma o el incumplimiento, en su caso, de
                        las obligaciones derivadas de acuerdos voluntarios o
                        convenios de colaboraci??n.
                      </ListItem>
                      <ListItem>
                        La no realizaci??n de las operaciones de limpieza y
                        recuperaci??n cuando un suelo haya sido declarado como
                        contaminado, tras el correspondiente requerimiento de la
                        Comunidad Aut??noma o el incumplimiento, en su caso, de
                        las obligaciones derivadas de acuerdos voluntarios o
                        convenios de colaboraci??n.
                      </ListItem>
                      <ListItem>
                        La mezcla de las diferentes categor??as de residuos
                        peligrosos entre s?? o de ??stos con los que no tengan tal
                        consideraci??n, siempre que como consecuencia de ello se
                        haya producido un da??o o deterioro grave para el medio
                        ambiente o se haya puesto en peligro grave la salud de
                        las personas.
                      </ListItem>
                      <ListItem>
                        La entrega, venta o cesi??n de residuos peligrosos a
                        personas f??sicas o jur??dicas distintas de las se??aladas
                        en esta Ley, as?? como la aceptaci??n de los mismos en
                        condiciones distintas de las que aparezcan en las
                        correspondientes autorizaciones o en las normas
                        establecidas en esta Ley.
                      </ListItem>
                      <ListItem>
                        La omisi??n, en el caso de residuos peligrosos, de los
                        necesarios planes de seguridad y previsi??n de
                        accidentes, as?? como de los planes de emergencia
                        interior y exterior de las instalaciones.
                      </ListItem>
                      <ListItem>
                        Valorizaci??n o eliminaci??n, en el plazo m??ximo de ciento
                        ochenta d??as tras la recepci??n de los mismos.
                      </ListItem>
                      <ListItem>
                        La obstrucci??n a la actividad inspectora o de control de
                        las Administraciones p??blicas.
                      </ListItem>
                      <ListItem>
                        La falta de etiquetado o el etiquetado incorrecto o
                        parcial de los envases que contengan residuos
                        peligrosos.
                      </ListItem>
                      <ListItem>
                        La mezcla de las diferentes categor??as de residuos
                        peligrosos entre s?? o de ??stos con los que no tengan tal
                        consideraci??n, siempre que como consecuencia de ello no
                        se haya producido un da??o o deterioro grave para el
                        medio ambiente o se haya puesto en peligro grave la
                        salud de las personas.
                      </ListItem>
                      <ListItem>
                        La entrega, venta o cesi??n de residuos no peligrosos a
                        personas f??sicas o jur??dicas distintas de las se??aladas
                        en esta Ley, as?? como la aceptaci??n de los mismos en
                        condiciones distintas de las que aparezcan en las
                        correspondientes autorizaciones o en las normas
                        establecidas en esta Ley.
                      </ListItem>
                    </OrderedList>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          </Accordion>
        </Flex>
      </Flex>
    </>
  );
}
